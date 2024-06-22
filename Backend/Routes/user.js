const express = require("express");
const userRouter = express.Router();
const zod=require("zod");
const {User,Account} = require("../db");
const jwt =require("jsonwebtoken");
const {JWT_SECRET} =require("../config");
const {authMiddleware} = require("../middleware/auth");

const userSchema = zod.object ({
    email: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),
});

userRouter.get("/signin",authMiddleware, async (req,res) => {
    try{
        const body=req.body;
        const {success} = userSchema.safeParse(body);
        if(!success){
            res.send(411).json({
                msg:"Invalid inputs"
            })
        }
        const user= await User.findOne({email:body.email});
        if(user.password!==body.password){
            res.send(411).json({
                msg:"Incorrect Password"   
            })
        }
        const token=jwt.sign({
            userId:user._id,
        },JWT_SECRET);
        res.json({
            msg:"Signin Successful",
            token:token
        })
    }
    catch{
        res.send(411).json({
            msg:"Failed to Signin"
        })
    }
})

userRouter.post("/signup",async (req,res) => {
    try{
        const body=req.body;    
        const {success} = userSchema.safeParse(body);
        if(!success){
            res.status(411).json({
                msg:"Invalid inputs"
            })
        }
        const user = await User.findOne({email:body.email});
        if(user){
            res.status(411).json({
                msg:"User already exists"
            })
        }
        const newUser= await User.create(body);
        const userId=newUser._id;
        await Account.create({userId});
        const token =jwt.sign({
            userId: userId
        },JWT_SECRET);
        res.json({
            msg:"User added successfully",
            token:token
        })
    }
    catch(err){
        res.status(411).json({
            msg:"Failed to Signup"
        })
    }
})


module.exports = {userRouter}