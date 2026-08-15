# ⚡ React Flashcard Quiz

A lightweight, interactive Flashcard Quiz application built with **React** and **Vite**. This project demonstrates core React fundamentals including component modularity, unidirectional data flow, controlled forms, and dynamic state management.

---

##  Features

* **Interactive Card Flip:** Toggle seamlessly between questions and answers with a single click.
* **Deck Navigation:** Cycle through cards effortlessly with wraparound navigation (modular indexing).
* **Dynamic Card Creation:** Add custom questions and answers using controlled input forms.
* **Card Deletion:** Remove mastered cards dynamically from the active deck.
* **Modular Component Architecture:** Clean separation of concerns across reusable components.

---

##  Tech Stack

* **Frontend Library:** React (Hooks: `useState`)
* **Build Tool:** Vite
* **Styling:** Vanilla CSS (Modern flexbox layout)

---

##  Project Structure

```text
src/
├── components/
│   ├── Flashcard.jsx      # Card UI and flip rendering
│   ├── Controls.jsx       # Navigation and action buttons
│   └── CardForm.jsx       # Controlled form to add new cards
├── data/
│   └── initialCards.js    # Default seed flashcard dataset
├── App.css                # Component styles and layout
├── App.jsx                # Root state orchestration
└── main.jsx               # React DOM entry point
```

Getting Started
### 1. Clone the repository
```Bash
git clone [https://github.com/your-username/react-flashcard-quiz.git](https://github.com/your-username/react-flashcard-quiz.git)
cd react-flashcard-quiz
```

### 2. Install dependencies
```Bash
npm install
```

### 3. Run the development server
```Bash
npm run dev
```

```
Open http://localhost:5173 in your browser to view the app.
```

### Core Concepts Learned
State Management (useState): Managing active card index, flip states, and card collections immutably.
Props & State Lifting: Passing callbacks and state handlers down to presentational child components.
Controlled Inputs: Synchronizing form input values directly with local component state.
Event Handling: Handling custom click and submission events without page reloads (e.preventDefault()).

### License
This project is licensed under the MIT License.

---

## 👩‍💻 Author

**Dua Ali Memon**  
Aspiring Software Engineer & Full-Stack Developer

---

## About the Journey

Built as part of my deep dive into React and modern web architectures. Continually building, experimenting, and turning ideas into responsive digital solutions.

> *"Small daily improvements over time lead to stunning results."*

## And yes made with ❤️ by dee ( duaAli )
