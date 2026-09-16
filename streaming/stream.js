import fs from 'fs'
// readable stream
const readstream = fs.createReadStream("intro.txt", {encoding:"utf-8",highWaterMark:10})

// readstream.on("data",(chunk)=>{
//     console.log("Data Received")
//     console.log("Data: ",chunk)
// })
// readstream.end("error",(error)=>{
//     console.log("error",error.message)
// });
// readstream.on("error",(error)=>{
//     console.log("Error: ", error.message)
// });

//writable stream
const writeStream = fs.createWriteStream("output.txt")
// writeStream.write("hello")

readstream.pipe(writeStream)