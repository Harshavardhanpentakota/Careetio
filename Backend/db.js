const mongoose = require("mongoose");
require('dotenv').config(); 
mongoose.connect(process.env.DB_URL);
console.log("Connection Successfull")

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    }
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: String,
        required:true
    },
    firstName: {
        type:String,
        required:true
    },
    enrolledCourses:[ {
        CourseName: {
            type: String,
            unique:true
        },
        progress: {
            type: Boolean,
            default: false
        },
        completionDate: {
            type:Date,
            default:null
        }
    }],
    bookmarkedCourse:[{
        CourseName: {
            type: String,
            unique:true
        },
        progress: {
            type: Boolean,
            default: false
        },
    }],

})

const completedCoursesCountSchema = new mongoose.Schema({
    courseId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
    },
    count:{
        type:Number,
        default:0
    }
})

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});

const resourceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true }
});
const topicSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    resources: [resourceSchema] 
});
const sectionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    topics: [topicSchema]
});
const CourseContentSchema = new mongoose.Schema({
    _id: {
        type: String,
        ref: "Course",
        required: true
    },
    title: { type: String, required: true },
    sections: [sectionSchema]
});

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);
const CompletedCoursesCount = mongoose.model("CompletedCoursesCount", completedCoursesCountSchema);
const Courses = mongoose.model("Courses", CourseSchema);
const CourseContent=mongoose.model("CourseContent", CourseContentSchema);

module.exports = {User, Account, CompletedCoursesCount, Courses, CourseContent};