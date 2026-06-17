require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Student Management API Running");
});

app.use("/students", studentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});