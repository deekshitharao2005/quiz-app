import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResultPage() {
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("quizResult");
    if (saved) {
      setResult(JSON.parse(saved));
    }
  }, []);

  if (!result) {
    return (
      <div className="page center">
        <h2>No result found</h2>
      </div>
    );
  }

  return (
    <div className="page center">
      <div className="card result-card">
        <h1>Quiz Result</h1>
        <p>Total Questions: {result.total}</p>
        <p>Correct Answers: {result.correct}</p>
        <p>Wrong Answers: {result.wrong}</p>
        <p>Unattempted: {result.unattempted}</p>

        <button className="btn" onClick={() => navigate("/topics")}>
          Back to Topics
        </button>
      </div>
    </div>
  );
}