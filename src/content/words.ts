import type {Word,ThemeId,BookId} from '../types';
export const CONTENT_VERSION='2026.10.25-v2';
export const books:{id:BookId;name:string;en:string;subtitle:string;image:ThemeId}[]=[
 {id:'junior',name:'初中英语词汇',en:'Junior English',subtitle:'从生活里的第一句话开始',image:'friends'},
 {id:'senior',name:'高中英语词汇',en:'Senior English',subtitle:'用更准确的词，表达自己的想法',image:'travel'},
 {id:'cet4',name:'大学英语四级',en:'CET-4',subtitle:'连接校园、生活与更广阔的世界',image:'nature'},
 {id:'cet6',name:'大学英语六级',en:'CET-6',subtitle:'走向更细致、有层次的表达',image:'school'},
];
export const themes:{id:ThemeId;name:string;en:string;desc:string}[]=[
 {id:'school',name:'校园与学习',en:'School & learning',desc:'从一次课堂讨论，到一个新的学习方法。'},
 {id:'friends',name:'朋友与相处',en:'Friends & connections',desc:'把理解、安慰和支持，变成能说出口的话。'},
 {id:'family',name:'家庭与生活',en:'Home & everyday life',desc:'在平常的日子里，发现值得表达的小事。'},
 {id:'health',name:'健康与运动',en:'Health & movement',desc:'关心身体，也照顾自己的情绪。'},
 {id:'nature',name:'动物与环境',en:'Nature & our planet',desc:'从身边的小行动，开始关爱共同的家园。'},
 {id:'travel',name:'旅行与出行',en:'Travel & discovery',desc:'带上好奇心，去认识世界的另一面。'},
 {id:'volunteer',name:'志愿与社区',en:'Care & community',desc:'用行动帮助别人，用语言分享经历。'},
];
// Original teaching examples. [] identifies the fixed collocation gap; {} the sentence target.
// First 20 items in each theme form the foundation set; later items extend the theme.
const data:Record<ThemeId,string>={
school:`borrow|v.|借入|borrow a book [from] a friend|I {borrowed} a dictionary from my classmate.|我向同学借了一本词典。
solve|v.|解决|solve a [problem]|We can {solve} this problem together.|我们可以一起解决这个问题。
check|v.|检查|check your [answers]|Please {check} your answers before you finish.|结束前请检查你的答案。
learn|v.|学习|learn [from] mistakes|We can {learn} from our mistakes.|我们可以从错误中学习。
improve|v.|改善；提高|improve your [English]|Reading can {improve} your English.|阅读可以提高你的英语水平。
practice|n.|练习|with regular [practice]|Regular {practice} helps me remember new words.|经常练习帮助我记住新词。
explain|v.|解释|explain something [to] someone|Please {explain} this rule to me.|请向我解释这条规则。
discuss|v.|讨论|discuss a [topic]|We often {discuss} interesting topics in class.|我们经常在课堂上讨论有趣的话题。
prepare|v.|准备|prepare [for] a test|I {prepare} for the test every evening.|我每天晚上为考试做准备。
subject|n.|学科|a favourite [subject]|English is my favourite {subject}.|英语是我最喜欢的学科。
knowledge|n.|知识|gain [knowledge]|Reading helps us gain {knowledge}.|阅读帮助我们获得知识。
progress|n.|进步|make [progress]|I am making {progress} in English.|我正在英语学习上取得进步。
mistake|n.|错误|make a [mistake]|Everyone can make a {mistake}.|每个人都可能犯错。
answer|n.|答案|the answer [to] a question|I know the {answer} to this question.|我知道这个问题的答案。
note|n.|笔记|take [notes]|I take {notes} during English lessons.|我在英语课上记笔记。
review|v.|复习|review your [notes]|I {review} my notes after class.|我在课后复习笔记。
method|n.|方法|a useful [method]|This {method} helps me learn new words.|这个方法帮助我学习新词。
focus|v.|集中注意力|focus [on] a task|I try to {focus} on one task.|我努力专注于一项任务。
achieve|v.|实现|achieve a [goal]|We work hard to {achieve} our goals.|我们努力实现自己的目标。
benefit|v.|受益|benefit [from] reading|We can {benefit} from reading every day.|我们能从每天阅读中受益。
illustrate|v.|说明；阐明|illustrate a point [with] an example|An example can {illustrate} this idea.|一个例子能说明这个想法。
evaluate|v.|评价；评估|evaluate the [results]|We need to {evaluate} the results carefully.|我们需要仔细评估结果。
academic|adj.|学术的；学业的|academic [performance]|Good sleep can improve {academic} performance.|良好的睡眠能改善学业表现。
independent|adj.|独立的|independent [learning]|Our teacher encourages {independent} learning.|我们的老师鼓励独立学习。`,
friends:`share|v.|分享|share ideas [with] friends|I {share} my ideas with my friends.|我和朋友分享想法。
agree|v.|同意|agree [with] someone|I {agree} with your idea.|我同意你的想法。
comfort|v.|安慰|comfort someone [with] kind words|I {comforted} my friend with kind words.|我用温暖的话语安慰朋友。
support|v.|支持|support each [other]|Good friends {support} each other.|好朋友互相支持。
trust|v.|信任|trust each [other]|We {trust} each other completely.|我们完全信任彼此。
honest|adj.|诚实的|be honest [with] someone|Please be {honest} with your friends.|请对朋友坦诚。
patient|adj.|耐心的|be patient [with] someone|She is always {patient} with me.|她总是对我很有耐心。
kind|adj.|友善的|be kind [to] others|We should be {kind} to others.|我们应该善待别人。
invite|v.|邀请|invite someone [to] a party|I will {invite} my friends to dinner.|我会邀请朋友来吃晚饭。
offer|v.|主动提供|offer help [to] someone|We can {offer} help to new students.|我们能主动帮助新同学。
listen|v.|倾听|listen [to] others|Good friends {listen} to each other.|好朋友互相倾听。
respect|v.|尊重|respect different [opinions]|We should {respect} different opinions.|我们应该尊重不同的意见。
promise|n.|承诺|keep a [promise]|I always try to keep my {promise}.|我总是努力信守承诺。
advice|n.|建议|a piece [of] advice|She gave me some useful {advice}.|她给了我一些有用的建议。
encourage|v.|鼓励|encourage someone [to] try|My friends {encourage} me to try again.|朋友们鼓励我再试一次。
understand|v.|理解|understand each [other]|We try to {understand} each other.|我们努力理解彼此。
relationship|n.|关系|build a good [relationship]|Trust helps build a good {relationship}.|信任有助于建立良好的关系。
partner|n.|搭档|work [with] a partner|My {partner} helped me finish the project.|我的搭档帮助我完成了项目。
anxious|adj.|焦虑的|be anxious [about] something|I feel {anxious} about my new school.|我对新学校感到焦虑。
humour|n.|幽默|a sense [of] humour|His sense of {humour} makes us laugh.|他的幽默感让我们发笑。
generosity|n.|慷慨|show [generosity]|Her {generosity} brought us closer together.|她的慷慨让我们更加亲近。
correspond|v.|通信|correspond [with] a friend|We {correspond} with each other by email.|我们通过电子邮件互相通信。
empathy|n.|同理心|show empathy [for] others|We should show {empathy} for others.|我们应该对别人抱有同理心。
conflict|n.|冲突|resolve a [conflict]|Honest talk can help resolve a {conflict}.|坦诚交谈有助于化解冲突。`,
family:`arrive|v.|到达|arrive [at] home is incorrect; arrive home|We {arrived} home before dinner.|我们在晚饭前到家了。
carry|v.|搬；携带|carry a [box]|I helped my father {carry} a box.|我帮助爸爸搬了一个箱子。
fill|v.|装满|fill a bottle [with] water|Please {fill} the bottle with water.|请把瓶子装满水。
return|v.|归还|return something [to] someone|Please {return} the book to your sister.|请把书还给你的姐姐或妹妹。
cover|v.|覆盖|cover something [with] a cloth|We {covered} the table with a cloth.|我们用一块布盖住了桌子。
lose|v.|丢失|lose your [keys]|I do not want to {lose} my keys.|我不想丢失钥匙。
clean|v.|打扫|clean your [room]|I {clean} my room every Sunday.|我每周日打扫房间。
cook|v.|烹饪|cook a [meal]|We {cook} a meal together on Sundays.|我们在周日一起做饭。
wash|v.|洗|wash the [dishes]|I help my parents {wash} the dishes.|我帮助父母洗碗。
repair|v.|修理|repair a [bike]|My father can {repair} my bike.|我的爸爸会修我的自行车。
celebrate|v.|庆祝|celebrate a [birthday]|We will {celebrate} her birthday at home.|我们会在家庆祝她的生日。
spend|v.|度过|spend time [with] family|I {spend} time with my family daily.|我每天都和家人共度时光。
remember|v.|记得|remember [to] call|Please {remember} to call your mother.|请记得给妈妈打电话。
forget|v.|忘记|forget [to] turn off the lights|Do not {forget} to turn off the lights.|不要忘记关灯。
quiet|adj.|安静的|a quiet [place]|Our garden is a {quiet} place.|我们的花园是一个安静的地方。
comfortable|adj.|舒适的|feel [comfortable]|This chair makes me feel {comfortable}.|这把椅子让我感到舒适。
ordinary|adj.|普通的|an ordinary [day]|An {ordinary} day can be special.|普通的一天也可以很特别。
neighbour|n.|邻居|help a [neighbour]|Our {neighbour} often helps us.|我们的邻居经常帮助我们。
habit|n.|习惯|develop a good [habit]|Reading before bed is a good {habit}.|睡前阅读是一个好习惯。
responsibility|n.|责任|take responsibility [for] something|We share the {responsibility} for housework.|我们共同承担家务的责任。
household|n.|家庭|household [tasks]|Everyone in our {household} shares the work.|我们家每个人都分担劳动。
routine|n.|日常惯例|a daily [routine]|A daily {routine} helps us stay organised.|日常惯例帮助我们保持有条理。
budget|n.|预算|make a [budget]|We made a {budget} for the month.|我们为这个月做了预算。
domestic|adj.|家庭的|domestic [life]|Technology has changed {domestic} life.|科技改变了家庭生活。`,
health:`exercise|n.|锻炼|do regular [exercise]|Regular {exercise} helps us stay healthy.|经常锻炼帮助我们保持健康。
healthy|adj.|健康的|stay [healthy]|Fruit helps us stay {healthy}.|水果帮助我们保持健康。
hurt|v.|使受伤|hurt your [leg]|I {hurt} my leg during the game.|我在比赛中伤了腿。
rest|n.|休息|have a [rest]|You should have a {rest} after exercise.|锻炼后你应该休息一下。
sleep|n.|睡眠|enough [sleep]|Enough {sleep} helps me focus in class.|充足的睡眠帮助我在课上专注。
energy|n.|精力；能量|get [energy]|A good breakfast gives us {energy}.|一顿好的早餐给我们能量。
balance|n.|平衡|keep a [balance]|We need a {balance} between work and rest.|我们需要工作与休息之间的平衡。
avoid|v.|避免|avoid [doing] something|We should {avoid} eating too much sugar.|我们应该避免吃太多糖。
relax|v.|放松|relax after [school]|Music helps me {relax} after school.|音乐帮助我放学后放松。
worry|v.|担心|worry [about] something|Do not {worry} about the game.|不要担心这场比赛。
join|v.|参加|join a [team]|I want to {join} the school team.|我想加入校队。
train|v.|训练|train [for] a race|We {train} for the race every week.|我们每周为比赛训练。
compete|v.|参赛|compete [in] a race|I will {compete} in the school race.|我将参加学校的赛跑。
win|v.|赢得|win a [match]|We hope to {win} the next match.|我们希望赢得下一场比赛。
strength|n.|力量|build [strength]|Swimming helps me build {strength}.|游泳帮助我增强力量。
prevent|v.|预防|prevent someone [from] doing something|Warm clothes can help {prevent} illness.|暖和的衣服有助于预防疾病。
recover|v.|恢复|recover [from] an illness|She needs time to {recover} from illness.|她需要时间从疾病中恢复。
reduce|v.|减少|reduce [stress]|Walking can {reduce} stress.|散步可以减轻压力。
regular|adj.|有规律的|regular [exercise]|I try to take {regular} exercise.|我努力进行有规律的锻炼。
teamwork|n.|团队合作|good [teamwork]|Good {teamwork} helps us play better.|良好的团队合作帮助我们表现更好。
nutrition|n.|营养|balanced [nutrition]|Good {nutrition} supports healthy growth.|良好的营养支持健康成长。
endurance|n.|耐力|build [endurance]|Running helps athletes build {endurance}.|跑步帮助运动员增强耐力。
physical|adj.|身体的|physical [health]|Exercise improves our {physical} health.|锻炼改善我们的身体健康。
psychological|adj.|心理的|psychological [support]|Friends can offer {psychological} support.|朋友可以提供心理支持。`,
nature:`protect|v.|保护|protect something [from] harm|We should {protect} animals from harm.|我们应该保护动物免受伤害。
environment|n.|环境|protect the [environment]|Everyone can help protect the {environment}.|每个人都能帮助保护环境。
pollution|n.|污染|reduce air [pollution]|Trees can help reduce air {pollution}.|树木有助于减少空气污染。
recycle|v.|回收利用|recycle [paper]|We can {recycle} paper at school.|我们可以在学校回收纸张。
save|v.|节约|save [water]|Turning off the tap helps {save} water.|关上水龙头有助于节约用水。
waste|v.|浪费|waste [food]|We should not {waste} food.|我们不应该浪费食物。
plant|v.|种植|plant a [tree]|We will {plant} trees this weekend.|我们这个周末要种树。
feed|v.|喂养|feed animals [with] care|We {feed} the animals every morning.|我们每天早上喂动物。
wild|adj.|野生的|wild [animals]|We should respect {wild} animals.|我们应该尊重野生动物。
forest|n.|森林|protect a [forest]|Many animals live in this {forest}.|许多动物生活在这片森林里。
river|n.|河流|a clean [river]|Please keep the {river} clean.|请保持河流清洁。
climate|n.|气候|climate [change]|We need to learn about {climate} change.|我们需要了解气候变化。
resource|n.|资源|natural [resources]|Water is an important natural {resource}.|水是一种重要的自然资源。
reuse|v.|重复使用|reuse a [bag]|We can {reuse} shopping bags.|我们可以重复使用购物袋。
plastic|n.|塑料|plastic [waste]|We should reduce {plastic} waste.|我们应该减少塑料垃圾。
disappear|v.|消失|disappear [from] a place|Some animals may {disappear} from this area.|一些动物可能从这一地区消失。
damage|v.|损害|damage the [environment]|Plastic waste can {damage} the environment.|塑料垃圾会损害环境。
natural|adj.|自然的|natural [beauty]|We enjoy the {natural} beauty here.|我们享受这里的自然之美。
responsible|adj.|负责任的|be responsible [for] something|We are {responsible} for our environment.|我们对环境负有责任。
action|n.|行动|take [action]|We must take {action} to protect animals.|我们必须采取行动保护动物。
biodiversity|n.|生物多样性|protect [biodiversity]|Forests are important for {biodiversity}.|森林对生物多样性很重要。
sustainable|adj.|可持续的|sustainable [development]|We should support {sustainable} development.|我们应该支持可持续发展。
conservation|n.|保护；保存|wildlife [conservation]|Wildlife {conservation} needs public support.|野生动物保护需要公众支持。
habitat|n.|栖息地|a natural [habitat]|We must protect their natural {habitat}.|我们必须保护它们的自然栖息地。`,
travel:`journey|n.|旅程|go on a [journey]|We went on a {journey} together.|我们一起踏上了旅程。
visit|v.|参观；拜访|visit a [museum]|We will {visit} a museum tomorrow.|我们明天会参观一座博物馆。
ticket|n.|票|book a [ticket]|I booked a train {ticket} online.|我在网上订了一张火车票。
station|n.|车站|at the [station]|We met at the {station} yesterday.|我们昨天在车站见面了。
map|n.|地图|read a [map]|A {map} helps us find the museum.|地图帮助我们找到博物馆。
direction|n.|方向|ask [for] directions|We asked a local person for {directions}.|我们向当地人问了路。
discover|v.|发现|discover a new [place]|We love to {discover} new places.|我们喜欢发现新的地方。
experience|n.|经历|an unforgettable [experience]|The trip was an unforgettable {experience}.|这次旅行是一次难忘的经历。
culture|n.|文化|local [culture]|Travel helps us learn about local {culture}.|旅行帮助我们了解当地文化。
local|adj.|当地的|local [people]|The {local} people were very friendly.|当地人非常友好。
plan|n.|计划|make a [plan]|We made a {plan} for our trip.|我们为旅行制订了计划。
reach|v.|到达|reach a [destination]|We will {reach} the village before dark.|我们会在天黑前到达村庄。
abroad|adv.|在国外；到国外|travel [abroad]|I hope to travel {abroad} one day.|我希望有一天能出国旅行。
view|n.|景色|enjoy the [view]|We stopped to enjoy the {view}.|我们停下来欣赏景色。
guide|n.|导游|a tour [guide]|Our {guide} told us interesting stories.|我们的导游给我们讲了有趣的故事。
passenger|n.|乘客|a train [passenger]|Every {passenger} needs a ticket.|每位乘客都需要一张票。
safe|adj.|安全的|stay [safe]|We should stay {safe} during the trip.|我们在旅行中应该注意安全。
explore|v.|探索|explore a [city]|We decided to {explore} the old city.|我们决定探索这座古城。
adventure|n.|冒险经历|an exciting [adventure]|The mountain trip was an exciting {adventure}.|这次山间旅行是一次刺激的冒险。
destination|n.|目的地|a travel [destination]|The lake is our next {destination}.|湖泊是我们的下一个目的地。
accommodation|n.|住宿|book [accommodation]|We booked our {accommodation} in advance.|我们提前预订了住宿。
itinerary|n.|行程安排|plan an [itinerary]|We planned our {itinerary} carefully.|我们仔细规划了行程。
heritage|n.|遗产|cultural [heritage]|We should respect the local cultural {heritage}.|我们应该尊重当地的文化遗产。
broaden|v.|拓宽|broaden your [horizons]|Travel can {broaden} our horizons.|旅行能拓宽我们的视野。`,
volunteer:`volunteer|n.|志愿者|work [as] a volunteer|I work as a {volunteer} on Saturdays.|我在周六做志愿者。
help|v.|帮助|help someone [with] something|We {help} children with their homework.|我们帮助孩子们做作业。
community|n.|社区|serve the [community]|We want to help our {community}.|我们想帮助我们的社区。
collect|v.|收集|collect books [for] children|We {collect} books for children.|我们为孩子们收集书籍。
donate|v.|捐赠|donate something [to] someone|We {donate} clothes to local families.|我们向当地家庭捐赠衣物。
provide|v.|提供|provide someone [with] something|We {provide} visitors with useful information.|我们向游客提供有用的信息。
organise|v.|组织|organise an [activity]|We will {organise} a park clean-up.|我们将组织一次公园清洁活动。
event|n.|活动|a school [event]|Everyone enjoyed the community {event}.|每个人都很享受这次社区活动。
elderly|adj.|年长的|elderly [people]|We often visit {elderly} people nearby.|我们经常探望附近的老人。
patiently|adv.|耐心地|listen [patiently]|We listen {patiently} to their stories.|我们耐心地倾听他们的故事。
useful|adj.|有用的|be useful [to] someone|Your advice is {useful} to us.|你的建议对我们很有用。
service|n.|服务|volunteer [service]|Volunteer {service} brings people together.|志愿服务让人们团结起来。
skill|n.|技能|learn a new [skill]|Volunteering helps me learn a new {skill}.|志愿服务帮助我学习新技能。
chance|n.|机会|a chance [to] help|This is a {chance} to help others.|这是一个帮助别人的机会。
raise|v.|筹集|raise [money]|We want to {raise} money for children.|我们想为孩子们筹款。
meaningful|adj.|有意义的|a meaningful [activity]|It was a {meaningful} activity for us.|这对我们来说是一次有意义的活动。
proud|adj.|自豪的|be proud [of] something|I am {proud} of our team.|我为我们的团队感到自豪。
effort|n.|努力|make an [effort]|Everyone made an {effort} to help.|每个人都努力提供帮助。
include|v.|包括|include someone [in] an activity|Our plans {include} a visit to the centre.|我们的计划包括参观这个中心。
apply|v.|申请|apply [for] a position|I want to {apply} for this position.|我想申请这个职位。
contribute|v.|贡献|contribute [to] the community|We can {contribute} to our community.|我们可以为社区作贡献。
initiative|n.|倡议|a community [initiative]|This {initiative} helps local families.|这项倡议帮助当地家庭。
participation|n.|参与|participation [in] activities|Your {participation} will make a difference.|你的参与将带来改变。
commitment|n.|投入；承诺|commitment [to] service|Volunteering requires {commitment} and patience.|志愿服务需要投入和耐心。`,
};
export const words:Word[]=Object.entries(data).flatMap(([theme,raw])=>raw.split('\n').map((line,i)=>{
 const [word,pos,meaning,chunk,sentence,translation]=line.split('|');
 const gap=chunk.match(/\[([^\]]+)\]/)?.[1]??'';
 return {id:`${theme}-${word}`,theme:theme as ThemeId,word,pos,meaning,collocation:chunk.replace(/\[|\]/g,''),gap,sentence,translation,level:i<20?1:2};
}));
// Fix teaching frame: arrive at + specific place, contrasted with arrive home in the example.
const arrive=words.find(w=>w.word==='arrive')!;arrive.collocation='arrive at the station';arrive.gap='at';
export function themeWords(book:BookId,theme:ThemeId){const all=words.filter(w=>w.theme===theme&&(book!=='junior'||w.level===1));return book==='cet6'?[...all.filter(w=>w.level===2),...all.filter(w=>w.level===1)]:all;}
export function sentence(w:Word){return w.sentence.replace(/[{}]/g,'');}
