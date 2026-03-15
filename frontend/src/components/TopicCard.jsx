export default function TopicCard({ topic, colorClass, taken, onStart }) {
  return (
    <div className={`topic-card ${colorClass}`}>
      <h3>{topic}</h3>
      <p>20 Questions</p>
      {taken && <p className="taken-text">Taken</p>}
      <button className="btn topic-btn" onClick={onStart}>
        Start Quiz
      </button>
    </div>
  );
}