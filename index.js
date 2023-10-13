const express=require("express");
const app=express();
const blogrouter=require("./blogrouter")
app.use("/api/main",blogrouter)
app.listen(6000,()=>{
    try{
        console.log('server is running on Port No. 6000')
    }
    catch(err){
           console.log('error occured during starting the live error',err)
    }
  
})