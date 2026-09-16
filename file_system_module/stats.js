import fs from 'fs'

fs.stat("notes.txt",(err,stats)=>{
    if (err){
        console.log(err)
        return;
    }
    // console.log("information of notes.txt:",stats);
    // console.log("size of the file:",stats.size)
    // console.log("File created at:",stats.birthtime.toISOString().split("T")[0]);  //[0] than it will show date and 1 will show time
    // console.log("modification file created at:",stats.mtime.toISOString());
    // console.log("access file at:",stats.atime.toISOString());
    // console.log("change file at:",stats.ctime.toISOString());
    //   console.log("is this file is a file:",stats.isFile());
      
});








//IIFE
(
()=>{
    console.log("hello")
}
)()




//higher order function
//create a list of number
const nums = [1,2,3,4,5];
nums.map((num,index)=>{
    console.log(`Number ${index+1}:${num*2}`);
});