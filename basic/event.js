// function signup(){
//     console.log("welcome")
//     sendconformationEmail()
//     sendNotification()
// }
// function sendconformationEmail(){
//     console.log("email send");
// }
// function sendNotification(){
//     console.log("email notification");
    
// }
// signup()


import EventEmitter from "node:events";


// create EventEmitter class instance
const emitter = new EventEmitter()

//event resister
emitter.on("orderPlace",()=>{
console.log("order place")
})
emitter.on("orderPlace",()=>{
console.log("Confomation detail send")
})
emitter.on("orderPlace",()=>{
console.log("inventory update")
})
emitter.emit("orderPlace")



// login

const loginEmitter = new EventEmitter()


loginEmitter.on("login",()=>{
console.log("Log In")
})
loginEmitter.on("login",()=>{
console.log("conformation detail send in email")
})
loginEmitter.once("login",()=>{
console.log("inventory updated in you profile once")
})
loginEmitter.on("login",()=>{
console.log("inventory updated in you profile on")
})
loginEmitter.once("login",()=>{
console.log("inventory updated in you profile once")
})
loginEmitter.emit("login")