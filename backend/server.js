import express from "express";
import chats from "./data/data.js";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRouter.js";
import chatRouter from "./routes/chatRouter.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

connectDB();

app.use("/api/user", userRouter);
app.use("/api/chat", chatRouter);

const { notFound, errorHandler } = errorMiddleware;
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on port ${PORT}`));
