console.log("start");
name="himanshu"
for(let i =1;i<=10;i++){
    console.log('$(i)')
}
console.log("===synchronous start")
console.log("===asynchronous start")
setTimeout(()=>{
    console.log("hello world")
},2000)
console.log("===asynchronous end")