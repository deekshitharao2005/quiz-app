import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import TopicCard from "../components/TopicCard";

export default function TopicsPage() {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const topics = [
    { name: "OS", colorClass: "os-card" },
    { name: "DBMS", colorClass: "dbms-card" },
    { name: "OOPS", colorClass: "oops-card" },
    { name: "SQL", colorClass: "sql-card" },
  ];

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    try {
      const res = await API.get("/quiz/results");
      setResults(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const topicTaken = (topic) => {
    return results.some((r) => r.topic === topic);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/auth");
  };

  return (
    <div className="page">
      <div className="top-bar">
        <h1>Select quiz to take</h1>
        <button className="btn logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="topics-grid">
        {topics.map((topic) => (
          <TopicCard
            key={topic.name}
            topic={topic.name}
            colorClass={topic.colorClass}
            taken={topicTaken(topic.name)}
            onStart={() => navigate(`/quiz/${topic.name}`)}
          />
        ))}
      </div>
    </div>
  );
}