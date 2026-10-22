const http = require('http');

const server =http,createServer((req,res){
    if(req.method==="GET"&&req.url === '/'){
        res.end("home page");
    }
    else if(req.method === "POST"){
        res.end("object added");
    }
    else {
        res.end("page not found")
    }
});
server.listen(3000,"127.0.0.1",()=>{
    console.log("server is Running...");
});