const express=require('express');
const router=express.Router()
const app =require('express')();
router.post('/signup',(req,res)=>{
    let{name,email,password,dateOfBirth}=req.body;
    name
})
router.post('/signin',(req,res)=>{
    
})
module.exports=router;
