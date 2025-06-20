import { useState } from 'react'
import './App.css'
import Modal from './components/Modal';
import Card from './components/Card';

const semesters = [
  { value: 1, label: '2025/1' },
  { value: 2, label: '2025/2' },
  { value: 3, label: '2026/1' },
  { value: 4, label: '2026/2' },
  { value: 5, label: '2027/1' },
  { value: 6, label: '2027/2' },
  { value: 7, label: '2028/1' },
  { value: 8, label: '2028/2' },
];

// const initialCards = [
//   { title: 'Matemática', values: [10, 8, 2, 0, 5, 7] },
//   { title: 'Português', values: [9, 7, 3, 1, 6, 8] },
//   { title: 'História', values: [10, 9, 4, 0, 7, 9] },
//   { title: 'Geografia', values: [8, 6, 2, 1, 5, 7] },
// ];

function App() {
const [selectedSemester, setSelectedSemester] = useState(semesters[0].value)
const [isModalOpen, setIsModalOpen] = useState(false);

const abrirModal = () => setIsModalOpen(true);
const fecharModal = () => setIsModalOpen(false);

  return (
    <div> 
      <header>
        <h1>My Report Card</h1>
      </header>

      <section className="main-section">
        <div className="main-section-left">
          <h4>Semester</h4>
          <select
            value={selectedSemester}
            onChange={e => setSelectedSemester(Number(e.target.value))}
          >
            {semesters.map(s => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>
        <div className="main-section-center">
          <button onClick={() => {/* lógica para criar matéria */}}>Create Subject</button>
        </div>
        <div className="main-section-right">
          <button onClick={abrirModal}>Abrir Modal</button>

      {isModalOpen && <Modal fecharModal={fecharModal} />}
        </div>
      </section>

      <main>
        <Card/>
      </main>
    </div>
)
}

export default App


 