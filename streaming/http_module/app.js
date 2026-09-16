const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log("hello");

    const data = fs.readFileSync("index.html");

    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");

    res.end(data);
});

const user = {
    name: "Alice",
    age: 22,
    city: "Delhi"
};

const json = JSON.stringify(user);
console.log(json);

const PORT = 3000;
const ADDRESS = "127.0.0.1";

server.listen(PORT, ADDRESS, () => {
    console.log("server is running...");
});