const Question = require("../models/Question");
const Result = require("../models/Result");

const getTopics = async (req, res) => {
  try {
    const topics = ["OS", "DBMS", "OOPS", "SQL"];
    res.json(topics);
  } catch (error) {
    res.status(500).json({ message: "Error fetching topics" });
  }
};

const getQuestionsByTopic = async (req, res) => {
  try {
    const { topic } = req.params;

    const questions = await Question.find({ topic }).select("-correctAnswer");

    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching questions" });
  }
};

const submitQuiz = async (req, res) => {
  try {
    const { topic, answers } = req.body;

    if (!topic || !answers || !Array.isArray(answers)) {
      return res.status(400).json({ message: "Topic and answers are required" });
    }

    const questions = await Question.find({ topic });

    let correct = 0;
    let wrong = 0;
    let unattempted = 0;

    questions.forEach((question, index) => {
      const userAnswer = answers[index];

      if (userAnswer === "" || userAnswer === undefined || userAnswer === null) {
        unattempted++;
      } else if (userAnswer === question.correctAnswer) {
        correct++;
      } else {
        wrong++;
      }
    });

    const result = await Result.create({
      user: req.user.id,
      topic,
      correct,
      wrong,
      unattempted,
      total: questions.length,
    });

    res.json({
      message: "Quiz submitted successfully",
      result,
      summary: {
        correct,
        wrong,
        unattempted,
        total: questions.length,
      },
    });
  } catch (error) {
    console.error("Submit quiz error:", error);
    res.status(500).json({ message: "Error submitting quiz" });
  }
};

const getMyResults = async (req, res) => {
  try {
    const results = await Result.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: "Error fetching results" });
  }
};

module.exports = {
  getTopics,
  getQuestionsByTopic,
  submitQuiz,
  getMyResults,
};