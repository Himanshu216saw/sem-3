function.getuser{userid,callback}{
    setTimeout(()=>{
        console.log("user Fetched");
        const user={
            id:1,

        }
    })
    
}
function.getprofile{userid,callback}{
    setTimeout(()=>{
        console.log("profile Fetched");
        const profile={
            username:"john Doe"
        }
        callback(null,profile)
    },1000)
    
}
function.getposts{username,callback}{
    setTimeout(()=>{
        console.log("posts fetched");
        const posts ={"post1","post2","post3"}
        
        callback(null,profile)
    },1000)
}
getuser(1,function(error,user){
    if(error){
        console.error(error);
        return;
    }
    getprofile(userid,function(error,profile){
    if(error){
        console.error(error);
        return;
    }
    getposts(profile username,function(error,post){
    if(error){
        console.error(error);
        return;
    }
    console.log("post fetched$(posts");
})
    