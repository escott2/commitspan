const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, minlength: 1 },
    description: { type: String, trim: true },
    targetDate: { type: Date },
    isCompleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Goal", goalSchema);
