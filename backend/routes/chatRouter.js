import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import chatController from "../controllers/chatController.js";

const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = chatController;
const { protect } = authMiddleware;
const router = express.Router();

router.post("/", protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupadd").put(protect, addToGroup);
router.route("/groupremove").put(protect, removeFromGroup);

export default router;
