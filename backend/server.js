import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRouter.js";
import chatRouter from "./routes/chatRouter.js";
import messageRouter from "./routes/messageRouter.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import { Server } from "socket.io";

const app = express();
app.use(cors({
    origin: ["https://chat-67eemlnf2-rajat-shuklas-projects.vercel.app"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  }));
app.use(express.json());
dotenv.config();

connectDB();

app.use("/api/user", userRouter);
app.use("/api/chat", chatRouter);
app.use("/api/message", messageRouter);

const { notFound, errorHandler } = errorMiddleware;
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`server started on port ${PORT}`));

const io = new Server(server, {
  pingTimeout: 60000,
  cors: {
    origin: "https://chat-67eemlnf2-rajat-shuklas-projects.vercel.app",
  },
});

const msgs = [];

io.on("connection", (socket) => {
  console.log("Connected to socket.io");

  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  socket.on("join room", (room) => {
    socket.join(room);
    console.log("user joined room" + room);
  });

  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (newMessageRecieved) => {
    console.log("message aaya", newMessageRecieved.content);
    var chat = newMessageRecieved.chat;
    if (!chat.users) return;

    if (msgs.includes(newMessageRecieved)) console.log("duplicated message");
    else msgs.push(newMessageRecieved);

    chat.users.forEach((user) => {
      if (user._id === newMessageRecieved.sender._id) return;

      console.log(user._id, newMessageRecieved.sender._id);
      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });

  socket.off("setup", () => {
    console.log("USER DISCONNECTED");
    try {
      socket.leave(userData._id);
    } catch (error) {
      console.log("failed to leave room!");
    }
  });
});
