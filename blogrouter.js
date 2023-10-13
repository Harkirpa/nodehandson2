const blogrouter=require("express").Router()

blogrouter.get("/",(req,res)=>{
    res.send({
            "id": 1,
            "what is express":"Express.js is a small framework that works on top of Node.js web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middleware and routing."
           
          
    });
})
module.exports=blogrouter