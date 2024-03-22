const express=require('express');
const router=express.Router()
const app =require('express')();
router.post('/signup',(req,res)=>{
    let{name,email,password,dateOfBirth}=req.body;
    name = name.trim();
    email = email.trim();
    password = password.trim();
    dateOfBirth = dateOfBirth.trim();

    if(name == "" || email == "" || password == "" ||dateOfBirth ==""){
        res.json({
            status: "failed",
            message: "empty input fields!"
        });
    }else if(!/^[a-zA-Z ]*$/.test(name)){
        res.json({
            status: "failed",
            message: "invaild name entered!"
        })
    }
    }

    }
})
router.post('/signin',(req,res)=>{
    
})
module.exports=router;
