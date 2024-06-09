const express = require("express");
const courseRouter= express.Router();
const {Course}=require("../db");

courseRouter.get("/courses",async (req,res) => {
    try{
        const category=req.query.cat;
        const courses= await Course.find({category:category});
        res.json(courses);
    }
    catch{
        res.send("Courses cannot be fetched");
    }
})

module.exports={courseRouter}


