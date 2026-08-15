//   function MyApp(){ 
//   return(
//    <>
//     <button>Click me to View your Blog</button>
//    </>
//   )
// }

// function App() {
//   return (
//     <>
//     <div id="main-container">
//          <h1>Blog Master</h1>
//          <br></br>
//         <h3> Welcome</h3>
//         <br />
//         <img src="assets/hero.png" alt="picture" />
//         <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolorum sit sunt dicta cupiditate quibusdam vero aperiam veniam dignissimos pariatur officiis rem assumenda accusantium, expedita quaerat saepe reprehenderit deleniti nostrum dolores possimus blanditiis! Dicta nostrum sit culpa? Deserunt magni eos fugiat et? Dolores, voluptatem commodi!</h5>

//         <br></br>
//         <MyApp/>
//     </div>
//     </>
//   )
// }
// export default App



import { useState } from 'react';
import { INITIAL_CARDS } from './data/initialCard';
import Flashcard from './components/Flashcard';
import Controls from './components/Controls';
import CardForm from './components/CardForm';
import './App.css';

export default function App() {
  const [cards, setCards] = useState(INITIAL_CARDS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = cards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleAddCard = (newCard) => {
    setCards((prev) => [...prev, newCard]);
  };

  const handleDeleteCard = () => {
    if (cards.length <= 1) return;
    setCards((prev) => prev.filter((card) => card.id !== currentCard.id));
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>⚡ React Flashcard Quiz</h1>
        <p>Card {currentIndex + 1} of {cards.length}</p>
      </header>

      <Flashcard
        card={currentCard}
        isFlipped={isFlipped}
        onFlip={() => setIsFlipped(!isFlipped)}
      />

      <Controls
        onPrev={handlePrev}
        onNext={handleNext}
        onDelete={handleDeleteCard}
      />

      <CardForm onAddCard={handleAddCard} />
    </div>
  );
}