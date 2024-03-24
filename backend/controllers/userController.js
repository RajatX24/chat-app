import asyncHandler from "express-async-handler";
import UserModel from "../models/userModel.js";
import generateToken from "../config/generateToken.js";

const registerUser = asyncHandler(async (req, res) => {
  console.log("reaching here///");
  const { name, email, password, pic } = req.body;
  if (!name || !email || !password) {
    req.status(400);
    throw new Error("Please enter all fields!");
  }

  const UserExists = await UserModel.findOne({ email });
  if (UserExists) {
    res.status(400);
    throw new Error("User already Exists!");
  }

  const user = await UserModel.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to Create User!");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Incorrect username or password!");
  }
});

export default { registerUser, authUser };
