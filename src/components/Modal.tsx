import { useState } from 'react';
import { EGrades, ESubject } from '../enums/enums';

interface ModalProps {
  fecharModal: () => void;
  handlerSubmit: (subject: ESubject, gradeType: EGrades, value: number) => void;
}

function Modal({ fecharModal, handlerSubmit }: ModalProps) {
  const [subject, setSubject] = useState<ESubject>(ESubject.Sub1);
  const [grades, setGrades] = useState<EGrades>(EGrades.allocated);
  const [value, setValue] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handlerSubmit(subject, grades, Number(value));
  };

  return (
    <div className="modal-overlay" onClick={fecharModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Post Grades</h2>
        <form className="form-notas" onSubmit={handleFormSubmit}>
          <label>
            Matéria:
            <select value={subject} onChange={(e) => setSubject(e.target.value as ESubject)}>
              {Object.values(ESubject).map((subj) => (
                <option key={subj} value={subj}>{subj}</option>
              ))}
            </select>
          </label>

          <label>
            Tipo de nota:
            <select value={grades} onChange={(e) => setGrades(e.target.value as EGrades)}>
              {Object.values(EGrades).map((grade) => (
                <option key={grade} value={grade}>{grade}</option>
              ))}
            </select>
          </label>

          <label>
            Valor:
            <input
              type="number"
              value={value}
              onChange={(e) => setValue((e.target.value))}
            />
          </label>

          <button type="submit">Salvar</button>
        </form>
        <button onClick={fecharModal}>Fechar</button>
      </div>
    </div>
  );
}

export default Modal;
