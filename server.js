// Server
import http from 'http';
import fs from 'fs';
import path from 'path';

const server = http.createServer((req, res)=>{
  if(req.url === '/' || req.url === '/index.html'){
    const filePath = path.join(__dirname, "index.html");
    fs.readFile(filePath, (err, data)=>{
      if(err){
        res.writeHead(500, {'content-type' : 'text/html'});
        res.end("Error loading html file");
      }else{
        res.writeHead(200, {'content-type' : 'text/html'});
        res.end(data);
      }
    });
  }else {
    res.writeHead(404, {'content-type' : 'text/html'});
    res.end("Page not found");
  }
});
const PORT = 3000;

server.listen(PORT, ()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
})
