const express = require("express");
const accountRouter=express.Router();
const { Account } = require("../db");
const { CLERK_SECRET_KEY } = require("../config");
const bodyParser = require('body-parser');
const Webhook = require('svix');

accountRouter.post("/",bodyParser.raw({type: 'application/json'})),
async function (req,res) {
    try {
        const payloadString = req.body.toString();
        const svixHeaders = req.headers;
        const wh = new Webhook(CLERK_SECRET_KEY);
        const evt = wh.verify(payloadString,svixHeaders);
        const {id, ...attributes} = evt.data;
        const eventType = evt.type;
        if(eventType === 'user.created'){
            const firstName=attributes.first_name;
            const account = new Account({userId:id,firstName:firstName});
            await account.save();
        }
        res.status(200).json({
            success:true,
            message:'Webhook received'
        });
    }
    catch(err){
        res.status(400).json({
            success:false,
            message:err.message
        })
    }
}

accountRouter.get("/completion",async (req,res) => {
    try{
        const userId=req.query.userId;
        const CourseName=req.query.courseName;
        let account= await Account.findOne({userId:userId});
        const iscompleted=account.enrolledCourses.find((course)=>course.CourseName===CourseName);
        if(iscompleted){
            res.json({
                progress:true
            })
        }
        else{
            res.json({
                progress:false
            })
        }
    }
    catch(err){
        console.log(err);
        res.status(504).json({
            success: false,
            msg: "Account cannot be fetched at the moment, please try again after a while!",
            err
        });
    }
})

accountRouter.post("/completion",async (req,res) => {
    try{
        const userId=req.query.userId;
        const CourseName=req.body.courseName;
        const completion=req.body.newIsCompleted;
        console.log(5)
        const account= await Account.findOne({userId:userId});
        console.log(4)
        if (!account) {
            return res.status(404).json({
                success: false,
                msg: "Account not found",
            });
        }
        const searchCourse =account.enrolledCourses.find((course)=>course.CourseName===CourseName);
        console.log(3);
        console.log(searchCourse);
        if (searchCourse) {
            if (completion === false) {
                console.log("Unenrolling course");
                await Account.updateOne(
                    { userId: userId },
                    { $pull: { enrolledCourses: { CourseName: CourseName } } }
                );
            } else {
                console.log("Course is already enrolled and marked as completed");
                await Account.updateOne(
                    { userId: userId, "enrolledCourses.CourseName": CourseName },
                    { $set: { "enrolledCourses.$.progress": true } }
                );
            }
        } else if (completion === true) {
            console.log("Enrolling course");
            await Account.updateOne(
                { userId: userId },
                { $push: { enrolledCourses: { CourseName: CourseName, progress: true } } }
            );
        }
        res.json({
            success:true
        })
    }
    catch(err){
        console.log(err);
        res.status(504).json({
            success: false,
            msg: "Account cannot be fetched at the moment, please try again after a while!",
            err: err
        });
    }
})

module.exports={accountRouter}