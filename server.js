const express = require("express");
const dotenv = require("dotenv");
const connectToMongodb = require("./db/database");
dotenv.config();
const app = express();
const port = 3000;

// Basic /ping route
app.get("/ping", (req, res) => {
  res.send("Pong");
});

// Start the server
app.listen(port, () => {
  connectToMongodb();
  console.log(`Server is running at http://localhost:${port}`);
});