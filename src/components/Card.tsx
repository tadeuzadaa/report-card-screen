import '../App.tsx';
import { SubjectEnum } from '../enums/enums';

function Card(){
    return (
        <><div className="card"> {/* subject 1 */}
            <h3 className="card-title">{SubjectEnum.Sub1}</h3>
            <hr />
            <div className="card-grid">
                <span className="category">Allocated</span>
                <span className="category">Grade</span>
                <span className="category-lost">Lost</span>
                <span className="category-missing">Missing</span>
                <span className="category-needed">Needed</span>
                <span className="category-safe">Safe</span>

                <label>number</label>
                <label>number</label>
                <label>number</label>
                <label>number</label>
                <label>number</label>
                <label>number</label>
            </div>
        </div><div className="card"> {/* subject 2 */}
                <h3 className="card-title">{SubjectEnum.Sub2}</h3>
                <hr />
                <div className="card-grid">
                    <span className="category">Allocated</span>
                    <span className="category">Grade</span>
                    <span className="category-lost">Lost</span>
                    <span className="category-missing">Missing</span>
                    <span className="category-needed">Needed</span>
                    <span className="category-safe">Safe</span>

                    <label>number</label>
                    <label>number</label>
                    <label>number</label>
                    <label>number</label>
                    <label>number</label>
                    <label>number</label>
                </div>
            </div><div className="card"> {/* subject 3 */}
                <h3 className="card-title">{SubjectEnum.Sub3}</h3>
                <hr />
                <div className="card-grid">
                    <span className="category">Allocated</span>
                    <span className="category">Grade</span>
                    <span className="category-lost">Lost</span>
                    <span className="category-missing">Missing</span>
                    <span className="category-needed">Needed</span>
                    <span className="category-safe">Safe</span>

                    <label>number</label>
                    <label>number</label>
                    <label>number</label>
                    <label>number</label>
                    <label>number</label>
                    <label>number</label>
                </div>
            </div></>

    );
}
export default Card;
