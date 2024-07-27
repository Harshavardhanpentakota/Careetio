const express = require("express");
const accountRouter=express.Router();
const { Account } = require("../db");
require('dotenv').config(); 
const bodyParser = require('body-parser');
const {Webhook} = require('svix');

function getDateOnly(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());   
}

accountRouter.post("/",bodyParser.raw({type: 'application/json'}),
async function (req,res) {
    try {
        console.log('WebHook Received try');
        const svix_id = req.headers["svix-id"];
  const svix_timestamp = req.headers["svix-timestamp"];
  const svix_signature = req.headers["svix-signature"];

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return res.status(400).json({
      msg: "Error occured -- no svix headers",
      status: 400
    })
  }

  // Get the body
  const payload = await req.json()
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
        const payloadString = req.body.toString();
        const svixHeaders = req.headers;
        const wh = new Webhook(process.env.CLERK_SECRET_KEY);
        console.log(wh);
        const evt = wh.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        })
        console.log(evt);
        const {id, ...attributes} = evt.data;
        const eventType = evt.type;
        console.log('Webhook verified:', evt);
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
        console.log("Webhook received catch")
        console.log(err);
        res.status(400).json({
            success:false,
            message:err.message
        })
    }
})

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
        res.status(504).json({
            success: false,
            msg: "Account cannot be fetched at the moment, please try again after a while!",
            err
        });
    }
})

accountRouter.get("/bookmark",async (req,res) => {
    try{
        const userId=req.query.userId;
        const CourseName=req.query.courseName;
        let account= await Account.findOne({userId:userId});
        const iscompleted=account.bookmarkedCourse.find((course)=>course.CourseName===CourseName);
        if(iscompleted){
            res.json({
                saved:true
            })
        }
        else{
            res.json({
                saved:false
            })
        }
    }
    catch(err){
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
        const currentDate = getDateOnly(new Date());
        const account= await Account.findOne({userId:userId});
        if (!account) {
            return res.status(404).json({
                success: false,
                msg: "Account not found",
            });
        }
        const searchCourse =account.enrolledCourses.find((course)=>course.CourseName===CourseName);
        if (searchCourse) {
            if (completion === false) {
                await Account.updateOne(
                    { userId: userId },
                    { $pull: { enrolledCourses: { CourseName: CourseName } } }
                );
                const check= account.bookmarkedCourse.find((course)=> course.CourseName===CourseName);
                if(check){
                    await Account.updateOne(
                        {userId:userId, "bookmarkedCourses.courseName": courseName},
                        {$set: { "bookmarkedCourse.$.progress": false }}
                    )
                }
            } else {
                await Account.updateOne(
                    { userId: userId, "enrolledCourses.CourseName": CourseName },
                    { $set: { "enrolledCourses.$.progress": true, "enrolledCourses.$.completionDate": currentDate } }
                );
                const check= account.bookmarkedCourse.find((course)=> course.CourseName===CourseName);
                if(check){
                    await Account.updateOne(
                        {userId:userId, "bookmarkedCourses.courseName": courseName},
                        {$set: { "bookmarkedCourse.$.progress": true }}
                    )
                }
            }
        } else if (completion === true) {
            await Account.updateOne(
                { userId: userId },
                { $push: { enrolledCourses: { CourseName: CourseName, progress: true, completionDate: currentDate  } } }
            );
            const check= account.bookmarkedCourse.find((course)=> course.CourseName===CourseName);
                if(check){
                    await Account.updateOne(
                        {userId:userId, "bookmarkedCourses.courseName": courseName},
                        {$set: { "bookmarkedCourse.$.progress": true }}
                    )
                }
        }
        res.json({
            success:true
        })
    }
    catch(err){
        res.status(504).json({
            success: false,
            msg: "Course cannot be marked at the moment, please try again after a while!",
            err: err
        });
    }
})

accountRouter.post("/bookmark",async (req,res) => {
    try{
        const userId=req.query.userId;
        const CourseName=req.body.courseName;
        const bookmark=req.body.newIsBookmarked;
        const account= await Account.findOne({userId:userId});
        if (!account) {
            return res.status(404).json({
                success: false,
                msg: "Account not found",
            });
        }
        const searchCourse =account.bookmarkedCourse.find((course)=>course.CourseName===CourseName);
        if (searchCourse) {
            if (bookmark === false) {
                await Account.updateOne(
                    { userId: userId },
                    { $pull: { bookmarkedCourse: { CourseName: CourseName } } }
                );
            } 
        } else if (bookmark === true) {
            await Account.updateOne(
                { userId: userId },
                { $push: { bookmarkedCourse: { CourseName: CourseName } } }
            );
        }
        res.json({
            success:true
        })
    }
    catch(err){
        res.status(504).json({
            success: false,
            msg: "Course cannot be marked at the moment, please try again after a while!",
            err: err
        });
    }
})

accountRouter.get("/savedCourses", async (req, res) => {
    try {
      const userId = req.query.userId;
      const account = await Account.findOne({ userId: userId });
      if (!account) {
        return res.status(404).json({
          success: false,
          msg: "Account not found",
        });
      }
      const savedCourses = account.bookmarkedCourse;
      res.json({
        courses: savedCourses,
      });
    } catch (err) {
      res.status(504).json({
        success: false,
        msg: "Courses cannot be fetched at the moment, please try again after a while!",
        err,
      });
    }
});

accountRouter.get("/completedCourses", async (req, res) => {
    try {
      const userId = req.query.userId;
      const account = await Account.findOne({ userId: userId });
      if (!account) {
        return res.status(404).json({
          success: false,
          msg: "Account not found",
        });
      }
      const enrolledCourses = account.enrolledCourses;
      res.json({
        courses: enrolledCourses,
      });
    } catch (err) {
      res.status(504).json({
        success: false,
        msg: "Courses cannot be fetched at the moment, please try again after a while!",
        err,
      });
    }
});

accountRouter.post("/test", async (req, res) =>{
    console.log("request received");
    res.json({
        success:true
    })
})


module.exports={accountRouter}



// const express = require("express");
// const accountRouter=express.Router();
// const { Account } = require("../db");
// require('dotenv').config(); 
// const bodyParser = require('body-parser');
// const Webhook = require('@clerk/clerk-sdk-node');

// function getDateOnly(date) {
//     return new Date(date.getFullYear(), date.getMonth(), date.getDate());   
// }

// accountRouter.post("/",bodyParser.raw({type: 'application/json'}),
// async function (req,res) {
//     try {
//         console.log('WebHook Received try');
//         const payloadString = req.body.toString();
//         const svixHeaders = req.headers;
//         console.log("Hello");
//         const wh = Webhook.verifyWebhookSignature(req.body,req.headers['clerk-signature'],process.env.CLERK_SECRET_KEY);
//         console.log(wh);
//         // const evt = wh.verify(payloadString,svixHeaders);
//         const {id, ...attributes} = wh.data;
//         const eventType = evt.type;
//         console.log('Webhook verified:', wh);
//         if(eventType === 'user.created'){
//             const firstName=attributes.first_name;
//             const account = new Account({userId:id,firstName:firstName});
//             await account.save();
//         }
//         res.status(200).json({
//             success:true,
//             message:'Webhook received'
//         });
//     }
//     catch(err){
//         console.log("Webhook received catch")
//         console.log(err);
//         res.status(400).json({
//             success:false,
//             message:err.message
//         })
//     }
// })