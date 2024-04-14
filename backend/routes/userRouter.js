import express from "express";
import userController from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

const { registerUser, authUser, allUser } = userController;
router.post("/signup", registerUser);
router.post("/login", authUser);
router.get("/allusers", protect, allUser);

export default router;
