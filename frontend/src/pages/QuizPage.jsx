import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api/api";

export default function QuizPage() {
  const { topic } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuestions();
  }, [topic]);

  const fetchQuestions = async () => {
    try {
      const res = await API.get(`/quiz/questions/${topic}`);
      setQuestions(res.data);
      setAnswers(new Array(res.data.length).fill(""));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleOptionChange = (questionIndex, option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = option;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = async () => {
    try {
      const res = await API.post("/quiz/submit", {
        topic,
        answers,
      });

      localStorage.setItem("quizResult", JSON.stringify(res.data.summary));
      navigate("/result");
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <div className="page center"><h2>Loading...</h2></div>;

  return (
    <div className="page">
      <h1>{topic} Quiz</h1>

      {questions.map((q, index) => (
        <div key={q._id} className="question-card">
          <h3>
            {index + 1}. {q.question}
          </h3>

          {q.options.map((option, optionIndex) => (
            <label key={optionIndex} className="option-label">
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                checked={answers[index] === option}
                onChange={() => handleOptionChange(index, option)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}

      <button className="btn submit-btn" onClick={handleSubmit}>
        Submit Quiz
      </button>
    </div>
  );
}