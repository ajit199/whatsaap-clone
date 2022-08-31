const express = require("express");
require("dotenv").config();
const cors = require("cors");
const http = require("http");
const authRouter = require("./routes/auth");
const messageRouter = require("./routes/messages");
const mongoose = require("mongoose");
const { Server } = require("socket.io");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/conversation", authRouter);
app.use("/messages", messageRouter);
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("DB connected");
});
app.get("/", (req, res) => {
  res.send("Hello World");
});
const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   socket.on("join_room", (data) => {
//     console.log(`User is joined: ${socket.id} with ID: ${data}`);
//   });

//   socket.on("send_message", (data) => {
//     console.log(data);
//     socket.to(data.room).emit("recieve_message", data);
//   });
//   socket.on("disconnect", () => {
//     console.log("User disconnected", socket.id);
//   });
// });
server.listen(process.env.PORT || 3600, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
