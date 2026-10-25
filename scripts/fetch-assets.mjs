import fs from 'node:fs/promises';
const root=new URL('../',import.meta.url);
const images={room:'1499750310107-5fef28a66643',school:'1523580494863-6f3031224c94',friends:'1529156069898-49953e39b3ac',family:'1511895426328-dc8714191300',health:'1461896836934-ffe607ba8211',nature:'1441974231531-c6227db76b6e',travel:'1476514525535-07fb3b4ae5f1',volunteer:'1559027615-cd4628902d4a'};
for(const [id,photo]of Object.entries(images)){
 const url=`https://images.unsplash.com/photo-${photo}?auto=format&fit=crop&w=${id==='room'?1800:700}&q=80`;
 const res=await fetch(url);if(!res.ok)throw Error(`${id}: ${res.status}`);
 await fs.writeFile(new URL(`public/assets/${id}.jpg`,root),Buffer.from(await res.arrayBuffer()));console.log('image',id);
}
const names={junior:'1 初中-乱序.txt',senior:'2 高中-乱序.txt',cet4:'3 四级-乱序.txt',cet6:'4 六级-乱序.txt'};
const counts={};
for(const [id,name] of Object.entries(names)){
 const url=`https://cdn.jsdelivr.net/gh/KyleBing/english-vocabulary@master/${encodeURIComponent(name)}`;
 const res=await fetch(url);if(!res.ok)throw Error(`${name}: ${res.status}`);
 const data=(await res.text()).replace(/^\uFEFF/,'').split(/\r?\n/).map(l=>{const i=l.indexOf('\t');return i>0?{word:l.slice(0,i).trim(),meaning:l.slice(i+1).trim()}:null}).filter(x=>x&&x.word&&x.meaning);
 const unique=[...new Map(data.map(w=>[w.word.toLowerCase(),w])).values()].sort((a,b)=>a.word.localeCompare(b.word));
 await fs.writeFile(new URL(`public/dictionaries/${id}.json`,root),JSON.stringify(unique));counts[id]=unique.length;console.log(id,unique.length);
}
await fs.writeFile(new URL('src/content/dictionary-counts.json',root),JSON.stringify(counts));
const license=await fetch('https://cdn.jsdelivr.net/gh/KyleBing/english-vocabulary@master/LICENSE');
if(!license.ok)throw Error('Missing license');await fs.writeFile(new URL('public/dictionaries/LICENSE.txt',root),await license.text());

