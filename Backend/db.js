const mongoose = require("mongoose");
const {DB_URL} = require("./config")

mongoose.connect(DB_URL);
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
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",    
        required:true
    },
    completedCourses:[ {
        CourseCategory: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Courses",
        },
        DateCompleted:{
            type:Date,
            default:Date.now
        }
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
    category: {
        type: String,
        required: true
    }
});

const CourseContentSchema = new mongoose.Schema({
    _id: {
        type: String,
        ref: "Course",
        required: true
    },
    Content: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);
const CompletedCoursesCount = mongoose.model("CompletedCoursesCount", completedCoursesCountSchema);
const Courses = mongoose.model("Courses", CourseSchema);
const CourseContent=mongoose.model("CourseContent", CourseContentSchema);

module.exports = {User, Account, CompletedCoursesCount, Courses, CourseContent};