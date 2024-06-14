const express = require("express");
const courseRouter= express.Router();
const {Courses}=require("../db");
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
            msg: "Courses cannot be fetched"
        });
    }
})

module.exports={courseRouter}


