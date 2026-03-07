const express = require("express");
const authRouter = require("./routes/authRoutes")
const interviewRouter = require("./routes/interviewRoutes")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const  app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)
module.exports =app;
