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
    }else if (!/^[\w-l.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
        res.json({
            status: "failed",
            message: "invalid email entered!"
        })
    }else if (!new Date(dateOfBirth).gettime()){
        res.json({
            status: "failed",
            message: "invaild date entered!"
        })
    }
    else if (password <8){
        res.json({
            status: "failed",
            message: "password is too short"
        })
    }
})
router.post('/signin',(req,res)=>{
    
})
module.exports=router;
