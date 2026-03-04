const { json } = require("express");
const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/**
 *
 * @name registerController
 * @description This controller will handle user registration logic. It will receive user data from the request, validate it, and then create a new user in the database.
 */
async function registerUser(req, res) {
  const { username, email, password } = req.body;

  //validation
  if (!username || !email || !password) {
    return res.status(400).json({
      message: "Please provide username, email and password",
    });
  }

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ email }, { username }],
  });

  //check if user already exists
  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  const hash = await bcrypt.hash(password, 10);

  //create user
  const user = await userModel.create({
    username,
    email,
    password: hash,
  });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token);

  res.status(201).json({
    message: "User registered successfully",
    user: {
      id: user._id,
      email: user.email,
      username: user.username,
    },
  });
}

/**
 * @name loginUserController
 * @description This controller will handle user login logic. It will receive user credentials from the request, validate them, and then generate a JWT token if the credentials are correct.
 */

async function loginUser(req, res) {
  const { email, username, password } = req.body;

  //validation

  const user = await userModel.findOne({
    $or: [{ email }, { username }],
  });

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    { userId: user._id },
     process.env.JWT_SECRET, 
     {expiresIn: "1d",});

     res.cookie("token", token);

     res.status(200).json({
        message: "User logged in successfully",
        user:{
            id: user._id,
            email: user.email.at,
            username: user.username
        },
        token
     })
}
module.exports = {
  registerUser,
  loginUser,
};
