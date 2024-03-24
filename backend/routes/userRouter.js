import express from "express";
import userController from "../controllers/userController.js";
const router = express.Router();

const { registerUser, authUser } = userController;
router.route("/").post(registerUser);
router.post("/login", authUser);

export default router;
