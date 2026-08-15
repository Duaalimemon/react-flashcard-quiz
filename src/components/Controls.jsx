export default function Controls({ onPrev, onNext, onDelete }) {
  return (
    <div className="controls">
      <button onClick={onPrev} className="btn">
        ← Previous
      </button>
      <button onClick={onDelete} className="btn btn-delete">
        Delete Card
      </button>
      <button onClick={onNext} className="btn">
        Next →
      </button>
    </div>
  );
}