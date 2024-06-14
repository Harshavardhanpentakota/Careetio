const express=require("express");
const router=express.Router();
const {userRouter} = require("./user");
const {accountRouter} = require("./account");
const {courseRouter} = require("./Courses");
console.log("First")

router.use("/user",userRouter);
router.use("/account",accountRouter);
router.use("/courses",courseRouter);
console.log("Second")
module.exports={mainRouter:router}
