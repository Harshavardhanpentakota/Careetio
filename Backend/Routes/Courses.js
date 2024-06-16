const express = require("express");
const courseRouter= express.Router();
const {Courses}=require("../db");
const {CourseContent}=require("../db");
const {generateResult}=require("../GenAi/playground");
console.log("Third")

courseRouter.get("/",async (req,res) => {
    try{
        const category=req.query.cat;
        const courses= await Courses.find({category:category});
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
        const category=req.query.cat;
        const courseId=req.query.id;
        const description=await CourseContent.find({category:category,_id:courseId});
        res.json({
            description:description
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
        const course=req.query.course_name;
        const description=await generateResult(course);
        res.json({
            description:description
        });
    }
    catch{
        res.status(504).json({
            success:false,
            msg:"Courses cannot be fetched at the moment, please try again after a while!"
        })
    }
})

module.exports={courseRouter}


