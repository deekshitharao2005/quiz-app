import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="page center">
      <div className="card welcome-card">
        <h1>Quiz App for WT ELA</h1>
        <p style={{ marginTop: "10px" }}>
          Welcome! Ready to take your quiz?
        </p>
        <button className="btn" onClick={() => navigate("/auth")}>
          Get Started
        </button>
      </div>
    </div>
  );
}