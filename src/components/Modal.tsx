import { useState } from 'react';
import '../App.tsx';
import { Grades, SubjectEnum } from '../enums/enums.ts';

interface ModalProps {
  fecharModal: () => void;
}

function Modal({ fecharModal }: ModalProps) {

  const [subject, setSubject] = useState<SubjectEnum>(SubjectEnum.Sub1);
  const [grades, setGrades] = useState<Grades>(Grades.allocated);

  const [value, setValue] = useState<number>(0);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(`Matéria: ${subject}, Tipo de nota: ${gradeType}, Valor: ${value}`);
//     // Aqui você pode atualizar seu estado global ou salvar no localStorage, etc.
//   };
  return (
    <div className="modal-overlay" onClick={fecharModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Post Grades</h2>
        {/* formulario para adicionar notas */}
        <form className="form-notas">
            <label>
                Matéria:
                <select value={subject} onChange={(e) => setSubject(e.target.value as SubjectEnum)}>
                    {Object.values(SubjectEnum).map((subj) => (
                                                                <option key={subj} value={subj}> {subj}</option>
                ))}
                </select>
            </label>

            <label>
                Tipo de nota:
                <select value={grades} onChange={(e) => setGrades(e.target.value as Grades)}>
                    {Object.values(Grades).map((grade) => (
                        <option key={grade} value={grade}>{grade}</option>
                    ))}
                </select>
            </label>

      <label>
        Valor:
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          min={0}
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
