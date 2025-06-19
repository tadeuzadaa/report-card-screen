import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <header>
        <h1>My Report Card</h1>
      </header>
        <section className="main-section">
          <div className="main-section-left">
            <h4>Semester</h4>
            <select>
              <option value="1">2025/1</option>
              <option value="2">2025/2</option>
              <option value="3">2026/1</option>
              <option value="4">2026/2</option>
              <option value="5">2027/1</option>
              <option value="6">2027/2</option>
              <option value="7">2028/1</option>
              <option value="8">2028/2</option>
            </select>
          </div>

          <div className="main-section-center">
            <button>Create Subject</button>
          </div>
          <div className="main-section-right">
            <button>+</button>
          </div>
        </section>

        <main>
          <div className="card">
            <h3 className="card-title">Título do Card</h3>
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
          </div>

          <div className="card">
            <h3 className="card-title">Título do Card</h3>
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
          </div>
          <div className="card">
            <h3 className="card-title">Título do Card</h3>
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
          </div>
          <div className="card">
            <h3 className="card-title">Título do Card</h3>
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
          </div>
        </main>
      </div>
      <button onClick={() => setCount(count + 1)}>
          Clicked {count} times
        </button>
    </>
  )
}

export default App
