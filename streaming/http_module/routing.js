import http from 'http'
import fs from 'fs'

const data = fs.readFileSync("./index.html","Utf8")
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Home page");
    } else if (req.url === "/contact") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("contact page");
    } else if (req.url === "/projects") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(config);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(data);
    }
});

server.listen(3000,"127.0.0.1",()=>{
    console.log("server is Running...");
})