import fs from 'fs'

fs.stat("notes.txt",(err,stats)=>{
    if (err){
        console.log(err)
        return;
    }
    console.log("information of notes.txt:",stats);
    console.log("size of the file:",stats.size)
    console.log("File created at:",stats.birthtime.toISOString().split("T")[0]);  //[0] than it will show date and 1 will show time
    console.log("modification file created at:",stats.mtime.toISOString());
    console.log("access file at:",stats.atime.toISOString());
    console.log("change file at:",stats.ctime.toISOString());
      console.log("is this file is a file:",stats.isFile());
      
});