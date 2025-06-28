import '../App.tsx';
import { CardProps } from '../enums/types';

function Card({ subject, allocated, grade }: CardProps) {
  return (
    <div className="card">
      <h3 className="card-title">{subject}</h3>
      <hr />
      <div className="card-grid">
        <span className="category">Allocated</span>
        <span className="category">Grade</span>
        <span className="category-lost">Lost</span>
        <span className="category-missing">Missing</span>
        <span className="category-needed">Needed</span>
        <span className="category-safe">Safe</span>

        <label>{allocated}</label>
        <label>{grade}</label>
        <label>0</label>
        <label>0</label>
        <label>0</label>
        <label>0</label>
      </div>
    </div>
  );
}

export default Card;