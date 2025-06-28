import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Modal from './components/Modal';
import { EGrades, ESubject } from './enums/enums';
import { Plus } from 'lucide-react';

const initialCards = [
  { subject: ESubject.Sub1, allocated: 0, grade: 0 },
  { subject: ESubject.Sub2, allocated: 0, grade: 0 },
  { subject: ESubject.Sub3, allocated: 0, grade: 0 },
];

const mapGradeEnumToKey = {
  [EGrades.allocated]: "allocated",
  [EGrades.grade]: "grade"
} as const;

function App() {
  const [cards, setCards] = useState(initialCards);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const abrirModal = () => setIsModalOpen(true);
  const fecharModal = () => setIsModalOpen(false);

  function handlerSubmit(subject: ESubject, gradeType: EGrades, value: number): void {
    const key = mapGradeEnumToKey[gradeType];

    setCards(prevCards =>
      prevCards.map(card =>
        card.subject === subject ? { ...card, [key]: value } : card
      )
    );
    fecharModal();
  }

  return (
    <div>
      <header><h1>My Report Card</h1></header>
      <section className="main-section">
        <div className="main-section-right">
          <button onClick={abrirModal}><Plus /></button>
        </div>
      </section>
      <main>
        {cards.map(card => (
          <Card
            key={card.subject}
            subject={card.subject}
            allocated={card.allocated}
            grade={card.grade}
          />
        ))}
      </main>
      {isModalOpen && (
        <Modal
          fecharModal={fecharModal}
          handlerSubmit={handlerSubmit}
        />
      )}
    </div>
  );
}

export default App;