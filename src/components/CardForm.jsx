import { useState } from 'react';

export default function CardForm({ onAddCard }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim() || !answer.trim()) return;

    onAddCard({
      id: Date.now(),
      question,
      answer,
    });

    setQuestion('');
    setAnswer('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h3>Add a New Card</h3>
      <input
        type="text"
        placeholder="Enter question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="input"
        required
      />
      <textarea
        placeholder="Enter answer..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="input textarea"
        required
      />
      <button type="submit" className="btn btn-submit">
        Add Flashcard
      </button>
    </form>
  );
}