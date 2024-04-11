import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";
import asyncHandler from "express-async-handler";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    //decodes the token

    console.log("asdasdasd", process.env.JWT_SECRET);
    console.log("asdasdasd", token);
    jwt.verify(token, process.env.JWT_SECRET, async (err, value) => {
      if (err) {
        res.status(401);
        throw new Error(" Not authorized, token failed!");
      }
      req.user = await UserModel.findById(value.id).select("-password");
      next();
    });
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

export default { protect };
