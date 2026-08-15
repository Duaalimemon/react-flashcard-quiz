export default function Flashcard({ card, isFlipped, onFlip }) {
  return (
    <div
      onClick={onFlip}
      className={`card ${isFlipped ? 'flipped' : ''}`}
    >
      <span className="badge">{isFlipped ? 'Answer' : 'Question'}</span>
      <h2 className="card-content">
        {isFlipped ? card.answer : card.question}
      </h2>
      <p className="hint">Click to flip</p>
    </div>
  );
}