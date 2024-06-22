const express = require("express");
const router=express.Router();
const { accountRouter } = require("./account");
const { courseRouter } = require("./Courses");

router.use("/account",accountRouter);
router.use("/courses",courseRouter);

module.exports = {mainRouter:router};