const express = require("express");
const {
  getTopics,
  getQuestionsByTopic,
  submitQuiz,
  getMyResults,
} = require("../controllers/quizController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/topics", authMiddleware, getTopics);
router.get("/questions/:topic", authMiddleware, getQuestionsByTopic);
router.post("/submit", authMiddleware, submitQuiz);
router.get("/results", authMiddleware, getMyResults);

module.exports = router;