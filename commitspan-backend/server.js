const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Goal = require("./models/Goal");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
};

connectDB();

app.use(express.json());

app.post("/api/goals", async (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).json({ message: "Please add a title" });
    }

    const goal = await Goal.create({
      title: req.body.title,
      description: req.body.description,
      targetDate: req.body.targetDate,
      isCompleted: req.body.isCompleted,
    });

    res.status(201).json(goal);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.get("/", (req, res) => {
  res.send("CommitSpan API is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
