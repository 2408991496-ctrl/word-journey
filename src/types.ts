export type BookId='junior'|'senior'|'cet4'|'cet6';
export type ThemeId='school'|'friends'|'family'|'health'|'nature'|'travel'|'volunteer';
export interface Word {id:string;word:string;pos:string;meaning:string;collocation:string;gap:string;sentence:string;translation:string;level:number;theme:ThemeId;}
export type Kind='choice'|'cloze'|'order'|'rewrite'|'writing'|'translate'|'match';
export interface Task {id:string;kind:Kind;stage:number;wordId?:string;prompt:string;source?:string;options?:string[];answer?:string;accepted?:string[];tokens?:string[];hint:string;structure:string;reference:string;requirements?:string[];targetWords?:string[];direction?:'en-zh'|'zh-en';pairs?:{left:string;right:string;wordId:string}[];rightOptions?:string[];}
export interface Attempt {text:string;at:number;status:'correct'|'incorrect'|'unknown';feedback:string;}
export interface Answer {draft:string;attempts:Attempt[];hints:{type:'wordlist'|'collocation'|'structure'|'reference';at:number}[];selfCheck:string[];order:number[];}
export interface Session {id:string;schema:1;contentVersion:string;book:BookId;theme:ThemeId;words:Word[];tasks:Task[];answers:Record<string,Answer>;index:number;createdAt:number;updatedAt:number;completedAt?:number;}
export interface Backup {format:'word-journey';schema:1;exportedAt:number;nickname:string;sessions:Session[];}
