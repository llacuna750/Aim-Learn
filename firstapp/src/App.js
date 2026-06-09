import logo from './logo.svg';
import './App.css';
import NameList from './components/NameList'
import List from './components/List';
import DeliciousFood from './components/DeliciousFood';
import MyComponents from './MyComponents';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Dessert from './components/Dessert'
import { useState } from 'react';
import RenderTimeCurrencyFlagLogo from './PhilippinesFlagCurrency/RenderTimeCurrencyFlagLogo';
import UncontrolledForm from './components/UncontrolledForm.jsx'
import ControlledForm from './components/ControlledForm.jsx';
import FeedBackform from './components/FeedBackform.jsx';

// Added a key prop for React's list rendering optimization
const ToDo = props => {
  const { id, createAt } = props;
  return (
    <tr>
      <td>
        <label>{id}</label>
      </td>
      <td>
        <input />
      </td>
      <td>
        <label>{createAt}</label>
      </td>
    </tr>
  )
}


function App() {

  const [todos, setTodos] = useState([
    {
      id: 'todo1',
      createAt: '20:30',
    },
    {
      id: 'todo2', // Fixed typo here from 'todo' to 'todo2'
      createAt: '21:00',
    }
  ])

  // Properly immutably reverses the array and updates state
  const reverseOrder = () => {
    setTodos([...todos].reverse());
  }

  const showParagraph = () => {
    const elements = document.getElementsByClassName('paraGraph')
    for (const el of elements) {
      el.style.display = 'block'
    }
  }

  const hideParagraph = () => {
    const elements = document.getElementsByClassName('paraGraph')
    for (const el of elements) {
      el.style.display = 'none'
    }
  }


  return (
    <div className="App">
      <RenderTimeCurrencyFlagLogo />

      <h1>List of Names</h1>
      <NameList />

      <h1>List of Fruits</h1>
      <List />

      <h3>Food Sell</h3>
      <DeliciousFood />

      <h3>useState() Hooks</h3>
      <MyComponents />

      <Stylesheet primary={true} />

      <Inline />
      <h1 className='error'>Error</h1>
      <h1 className={`${styles.success}`}>Success</h1>

      <h1>Dessert</h1>
      <Dessert />

      {/* --- FIX: Added a button and wrapped ToDo inside a <table> --- */}
      <div style={{ margin: '20px 0' }}>
        <button onClick={reverseOrder}>Reverse Order</button>
        <table style={{ margin: '0 auto', textAlign: 'left' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Input</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <ToDo key={todo.id} id={todo.id} createAt={todo.createAt} />
            ))}
          </tbody>
        </table>
      </div>

      <div className={`${styles.noGap}`}>
        <h1 className={styles.borderaQ} onMouseEnter={showParagraph} onMouseLeave={hideParagraph}>Controlled components vs. Uncontrolled components</h1>
        <p className='paraGraph'>
          Rule of thumb: Prefer controlled components for most cases.
          Use uncontrolled for simple/quick forms or file inputs.
        </p>

        <div className='paraGraph' style={{ display: 'flex', gap: '24px', padding: '16px' }}>

          {/* DO Section */}
          <div style={{
            border: '2px solid #22c55e',
            borderRadius: '8px',
            padding: '16px',
            flex: 1,
            backgroundColor: '#f0fdf4'
          }}>
            <h3 style={{ color: '#16a34a', marginTop: 0 }}>✅ DO</h3>
            <ul style={{ paddingLeft: '20px', margin: 0 }}>
              <li>Use controlled components by default</li>
              <li>Use form libraries (React Hook Form) for complex forms</li>
              <li>Always validate inputs</li>
              <li>Use uncontrolled only for file inputs</li>
              <li>Initialize state with <code>""</code> not <code>undefined</code></li>
            </ul>
          </div>

          {/* DONT Section */}
          <div style={{
            border: '2px solid #ef4444',
            borderRadius: '8px',
            padding: '16px',
            flex: 1,
            backgroundColor: '#fef2f2'
          }}>
            <h3 style={{ color: '#dc2626', marginTop: 0 }}>❌ DON'T</h3>
            <ul style={{ paddingLeft: '20px', margin: 0 }}>
              <li>Mix controlled and uncontrolled</li>
              <li>Use <code>undefined</code> as initial value</li>
              <li>Skip validation</li>
              <li>Use uncontrolled for complex forms</li>
              <li>Access DOM directly when state can do the job</li>
            </ul>
          </div>

        </div>
      </div>

      <div className='formDiv'>
        <UncontrolledForm />
        <ControlledForm />
        <FeedBackform />
      </div>
      {/* ------------------------------------------------------------- */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Gab!
        </a>
      </header>
    </div>
  );
}

export default App;