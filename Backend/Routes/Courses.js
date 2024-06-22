const express = require("express");
const courseRouter= express.Router();
const { Courses } = require("../db");
const { CourseContent } = require("../db");
const { generateResult } = require("../GenAi/playground");
console.log("Third")

courseRouter.get("/",async (req,res) => {
    try{
        const courses= await Courses.find();
        res.json({
            courses:courses
        });
    }
    catch{
        res.status(504).json({
            success: false,
            msg: "Courses cannot be fetched at the moment, please try again after a while!"
        });
    }
})


courseRouter.get("/description",async(req,res) => {
    try{
        const courseName=req.query.name;
        const courseContent=await CourseContent.find({title:courseName});
        res.json({
            content:courseContent
        });
    }
    catch{
        res.status(504).json({
            success:false,
            msg:"Courses cannot be fetched at the moment, please try again after a while!"
        })
    }
})

courseRouter.get("/description/generate",async (req,res) => {
    try{
        const course=req.query.search;
        if(!course){
            return res.status(400).json({ success: false, msg: "Please provide a course name" });
        }
        const description=await generateResult(course);
        res.json({
            success:true,
            description:description
        });
    }
    catch{
        res.status(504).json({
            success:false,
            msg:"Courses cannot be generated at the moment, please try again after a while!"
        })
    }
})

module.exports = {courseRouter};


