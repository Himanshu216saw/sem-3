// console.log("start")
// setTimeout(()=>{
//     console.log("setTime out")

// },1000)
// Promise.resolve().then(()=>{
//     console.log("promise")
// })
// console.log("end")



import os from 'os'

console.log("CPU Architecture:"+os.arch())

console.log("model:"+os.platform())

console.log("total memory:"+(os.totalmem()/
(1024*1024*1024)).toFixed(2)+"gb")

console.log("free memory:"+(os.freemem()/
(1024*1024*1024)).toFixed(2)+"gb")
