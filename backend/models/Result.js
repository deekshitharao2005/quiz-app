const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    topic: {
      type: String,
      required: true,
      enum: ["OS", "DBMS", "OOPS", "SQL"],
    },
    correct: {
      type: Number,
      required: true,
      default: 0,
    },
    wrong: {
      type: Number,
      required: true,
      default: 0,
    },
    unattempted: {
      type: Number,
      required: true,
      default: 0,
    },
    total: {
      type: Number,
      required: true,
      default: 20,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Result", resultSchema);