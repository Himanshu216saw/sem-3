import { EventEmitter } from "node:events";
class fileuploader extends EventEmitter{
    upload(filename){
        console.log("file upload start");
        this.emit("fileupload",filename)
        }
}
const uploader =new fileuploader()

uploader.on("fileupload",(filename)=>{
    console.log("file upload",filename)
})
uploader.upload("file.txt")