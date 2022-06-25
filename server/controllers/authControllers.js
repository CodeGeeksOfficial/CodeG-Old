const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const {
    userFullName,
    userEmail,
    userName,
    gender,
    preferedLanguage,
    occupation,
    institution,
    passingYear,
    password,
  } = req.body;

  if (
    !userFullName ||
    !userEmail ||
    !userName ||
    !gender ||
    !preferedLanguage ||
    !occupation ||
    !institution ||
    !passingYear ||
    !password
  ) {
    res.status(400);
    throw new Error("Please enter all the required fields");
  }

  const existingUserEmail = await User.findOne({ userEmail });
  const existingUserName = await User.findOne({ userName });

  if (existingUserEmail || existingUserName) {
    res.status(400);
    throw new Error("User already exists");
  }

  const newUser = await User.create({
    userFullName,
    userEmail,
    userName,
    gender,
    preferedLanguage,
    occupation,
    institution,
    passingYear,
    password,
    score: 0,
    badge: "codie",
  });

  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      userFullName: newUser.userFullName,
      userEmail: newUser.userEmail,
      userName: newUser.userName,
      gender: newUser.gender,
      preferedLanguage: newUser.preferedLanguage,
      occupation: newUser.occupation,
      institution: newUser.institution,
      passingYear: newUser.passingYear,
      score: newUser.score,
      badge: newUser.badge,
      token: generateToken(newUser._id),
    });
  } else {
    throw new Error("Failed to create user account.");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { userEmail, password } = req.body;

  const existingUser = await User.findOne({ userEmail });

  if (existingUser && (await existingUser.matchPassword(password))) {
    res.json({
      _id: existingUser._id,
      userFullName: existingUser.userFullName,
      userEmail: existingUser.userEmail,
      userName: existingUser.userName,
      token: generateToken(existingUser._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

module.exports = { registerUser, loginUser };
