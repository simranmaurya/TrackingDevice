const express = require("express");
// const socketio = require("socket.io");
const http = require("http");
const path = require("path");

const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
// const io = socketio(server);
// const io = new Server(server);
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins or specify your frontend URL
    methods: ["GET", "POST"],
  },
});

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("index");
});

// io.on("connected", function (socket) {
//   console.log("Connected");
// });
io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

const socket = require("socket.io-client")("https://localhost:3000/");

socket.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log("Server is running on ${PORT}");
});
