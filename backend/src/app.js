const express = require("express");
const authRouter = require("./routes/authRoutes")

const  app = express();

app.use(express.json());

//Routes
app.use("/api/auth", authRouter)
module.exports =app;
