import type {Answer,BookId,Session,Task,ThemeId,Word} from '../types';
import {CONTENT_VERSION,sentence,themeWords,words} from '../content/words';
import {writing,writingReference,rewriteSources} from '../content/writing';
export const stages=['认识单词','搭配练习','写句子','写作文'];
export function stageOf(task:Task){if(task.kind==='writing')return 3;if(task.kind==='rewrite'||task.kind==='order')return 2;if(task.kind==='cloze'||task.kind==='match')return 1;if(task.kind==='translate'||task.id.startsWith('meaning-'))return 0;return Math.min(3,task.stage);}
export function blankAnswer():Answer{return {draft:'',attempts:[],hints:[],selfCheck:[],order:[]};}
export function normalize(s:string){return s.normalize('NFKC').trim().toLowerCase().replace(/[‘’]/g,"'").replace(/[^\p{L}\p{N}\s']/gu,' ').replace(/\s+/g,' ').trim();}
function hash(s:string){let h=2166136261;for(const c of s)h=Math.imul(h^c.charCodeAt(0),16777619);return h>>>0;}
export function shuffled<T>(items:T[],seed:string):T[]{const a=[...items];let n=hash(seed);for(let i=a.length-1;i>0;i--){n=(Math.imul(n,1664525)+1013904223)>>>0;const j=n%(i+1);[a[i],a[j]]=[a[j],a[i]];}return a;}
export function selectWords(book:BookId,theme:ThemeId,count:number,history:Session[]){const candidates=themeWords(book,theme);const usage=new Map<string,number>();for(const s of history.filter(s=>s.book===book))for(const w of s.words)usage.set(w.id,(usage.get(w.id)??0)+1);return candidates.map((w,i)=>({w,i})).sort((a,b)=>(usage.get(a.w.id)??0)-(usage.get(b.w.id)??0)||a.i-b.i).slice(0,Math.min(count,candidates.length)).map(x=>x.w);}
function gapped(w:Word){return w.collocation.replace(new RegExp(`\\b${w.gap.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}\\b`),'_____');}
export function tasksFor(selected:Word[],book:BookId,theme:ThemeId):Task[]{
 const tasks:Task[]=[];
 for(const w of selected){tasks.push({id:`en-zh-${w.id}`,stage:0,kind:'translate',direction:'en-zh',wordId:w.id,prompt:'英译中',source:w.word,answer:w.meaning,accepted:w.meaning.split(/[；;、，]/).filter(Boolean),hint:`词性：${w.pos}`,structure:w.translation,reference:`${w.word}：${w.meaning}`});}
 for(const w of selected){tasks.push({id:`zh-en-${w.id}`,stage:0,kind:'translate',direction:'zh-en',wordId:w.id,prompt:'中译英',source:w.meaning,answer:w.word,accepted:w.word==='organise'?['organize']:w.word==='neighbour'?['neighbor']:w.word==='humour'?['humor']:undefined,hint:`${w.word[0]} 开头，共 ${w.word.length} 个字母`,structure:`词性：${w.pos}`,reference:w.word});}
 for(const [i,w] of selected.entries()){
 const source=gapped(w);const prepositions=['in','on','at','to','with','from','for','of','about','by','into','as'];const pool=prepositions.includes(w.gap)?prepositions:w.gap==='doing'?['doing','do','done','to do']:[...new Set(words.map(v=>v.gap))];const choices=shuffled([w.gap,...shuffled(pool.filter(v=>v!==w.gap),w.id).slice(0,3)],w.id+'choice');
 tasks.push({id:`collocation-${w.id}`,stage:1,kind:i%2===0?'cloze':'choice',wordId:w.id,prompt:i%2===0?'补全搭配':'选择合适的搭配',source,options:i%2===1?choices:undefined,answer:w.gap,hint:`目标词：${w.word}（${w.meaning}）`,structure:`例句：${sentence(w)}`,reference:w.collocation});}
 const pairs=selected.map(w=>{const blank=gapped(w);const i=blank.indexOf('_____');return {left:blank.slice(0,i).trim(),right:(w.gap+blank.slice(i+5)).trim(),wordId:w.id};}).filter((v,i,a)=>a.findIndex(x=>x.right===v.right)===i).slice(0,4);
 if(pairs.length>=2){const rightOptions=shuffled(pairs.map(p=>p.right),theme+'matching');tasks.push({id:`match-${theme}`,kind:'match',stage:1,prompt:'连接左右两侧，组成搭配',pairs,rightOptions,answer:JSON.stringify(pairs.map(p=>rightOptions.indexOf(p.right))),hint:'先选择左侧，再选择右侧；再次选择可以修改连线。',structure:'按本组学过的搭配配对。',reference:pairs.map(p=>`${p.left} ${p.right}`).join('\n')});}
 const focus=selected.filter((_,i)=>i%5===0);
 for(const w of focus){const original=rewriteSources[w.word];tasks.push({id:`rewrite-${w.id}`,stage:2,kind:'rewrite',wordId:w.id,prompt:original?`用 ${w.word} 改写句子`:`用 ${w.word} 写句子`,source:original??w.translation,answer:sentence(w),hint:`搭配：${w.collocation}`,structure:sentence(w).split(' ').slice(0,2).join(' ')+' …',reference:sentence(w),requirements:['保留主要信息','使用目标词和合适搭配','检查主语、动词和句子是否完整']});}
 const p=writing[theme];tasks.push({id:`writing-${theme}`,stage:3,kind:'writing',prompt:p.title,source:p.intro,hint:'按题目要点依次组织内容。',structure:'说明目的或背景 → 具体行动 → 感受或期待。',reference:writingReference(theme,book),requirements:p.requirements,targetWords:selected.map(w=>w.word)});
 return tasks;
}
export function createSession(book:BookId,theme:ThemeId,selected:Word[]):Session{const now=Date.now();return {id:crypto.randomUUID(),schema:1,contentVersion:CONTENT_VERSION,book,theme,words:structuredClone(selected),tasks:tasksFor(selected,book,theme),answers:{},index:0,createdAt:now,updatedAt:now};}
export function judge(task:Task,text:string):{status:'correct'|'incorrect'|'unknown';feedback:string}{
 if(task.kind==='writing'||task.kind==='rewrite')return {status:'unknown',feedback:'已记录，待对照参考或老师核对。'};
 if(task.kind==='match'){try{const value=JSON.parse(text);if(JSON.stringify(value)===task.answer)return {status:'correct',feedback:'配对正确。'};}catch{}return {status:'incorrect',feedback:'部分搭配未匹配，请检查连线。'};}
 const valid=[task.answer??'',...(task.accepted??[])].map(normalize);const n=normalize(text);
 if(valid.includes(n))return {status:'correct',feedback:'正确。'};
 if(task.direction==='en-zh')return {status:'unknown',feedback:'未匹配预设释义，请对照参考核对。'};
 return {status:'incorrect',feedback:task.kind==='cloze'||task.kind==='choice'?'未匹配参考答案，请检查搭配。':'未匹配参考答案，请检查拼写或顺序。'};
}
export function displayAnswer(task:Task,text:string){if(task.kind!=='match')return text;try{const mapping=JSON.parse(text);if(!Array.isArray(mapping))return text;return (task.pairs??[]).map((p,i)=>`${p.left} → ${task.rightOptions?.[mapping[i]]??'未连接'}`).join('\n');}catch{return text;}}
export function summary(s:Session){const objective=s.tasks.filter(t=>!['writing','rewrite'].includes(t.kind));const answered=objective.filter(t=>s.answers[t.id]?.attempts.length);const correct=objective.filter(t=>s.answers[t.id]?.attempts[0]?.status==='correct');const submitted=s.tasks.filter(t=>s.answers[t.id]?.attempts.length);return {objective:objective.length,answered:answered.length,correct:correct.length,submitted:submitted.length,total:s.tasks.length,revisions:Object.values(s.answers).reduce((n,a)=>n+a.attempts.filter((v,i)=>i>0&&v.text!==a.attempts[i-1].text).length,0),hints:Object.values(s.answers).reduce((n,a)=>n+a.hints.length,0),open:s.tasks.filter(t=>['writing','rewrite'].includes(t.kind)&&s.answers[t.id]?.attempts.length).length};}
export function reviewWords(s:Session){return s.words.filter(w=>s.tasks.some(t=>(t.wordId===w.id||t.pairs?.some(p=>p.wordId===w.id))&&((s.answers[t.id]?.attempts[0]?.status==='incorrect')||(s.answers[t.id]?.hints.length??0)>0))||s.tasks.some(t=>t.kind==='writing'&&(s.answers[t.id]?.hints.length??0)>0));}
export function wordCount(s:string){return (s.match(/[A-Za-z]+(?:['’-][A-Za-z]+)*/g)??[]).length;}
