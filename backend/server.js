require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/database");
const generateInterviewReport = require("./src/serivces/aiService");
const { resume, selfDescription, jobDescription } = require("./src/serivces/temp");

connectDB()
generateInterviewReport({ resume, selfDescription, jobDescription })

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})