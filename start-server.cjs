const http=require('node:http');
const fs=require('node:fs');
const path=require('node:path');
const root=path.join(__dirname,'dist');
const port=Number(process.env.PORT||4173);
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.jpg':'image/jpeg','.svg':'image/svg+xml','.txt':'text/plain; charset=utf-8','.png':'image/png'};
if(!fs.existsSync(path.join(root,'index.html'))){console.error('Missing dist/index.html. Please run pnpm build first.');process.exit(1);}
const server=http.createServer((req,res)=>{
 let url;try{url=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400);res.end('Bad request');return;}
 const target=path.resolve(root,'.'+url);if(target!==root&&!target.startsWith(root+path.sep)){res.writeHead(403);res.end('Forbidden');return;}
 const file=url==='/'?path.join(root,'index.html'):target;
 if(req.method!=='GET'&&req.method!=='HEAD'){res.writeHead(405);res.end();return;}
 fs.stat(file,(error,stat)=>{if(error||!stat.isFile()){res.writeHead(404);res.end('Not found');return;}res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});if(req.method==='HEAD'){res.end();return;}fs.createReadStream(file).pipe(res);});
});
server.on('error',error=>{console.error('Cannot start local server:',error.message);console.error('If port 4173 is in use, open http://127.0.0.1:4173 or set a different PORT.');});
server.listen(port,'127.0.0.1',()=>console.log(`Word Journey is ready: http://127.0.0.1:${port}\nKeep this window open while learning. Press Ctrl+C to stop.`));
