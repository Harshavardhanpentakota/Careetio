const express = require("express");
const router=express.Router();
const { accountRouter } = require("./account");
const { courseRouter } = require("./Courses");
console.log("First")

router.use("/account",accountRouter);
router.use("/courses",courseRouter);
console.log("Second");

module.exports = {mainRouter:router};