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
import { useState, useRef } from 'react';
import RenderTimeCurrencyFlagLogo from './PhilippinesFlagCurrency/RenderTimeCurrencyFlagLogo';


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

const DisplayUncontrolledComponent = ({ inputV }) => {
  if (!inputV) return null;
  return (
    <h1>{inputV}</h1>
  )
}


/* Uncontrolled components 
✅ Use Uncontrolled when:
- Simple forms with no real-time needs
- Integrating with non-React code
- File inputs (<input type="file">)
- Performance-critical forms with many fields
*/
const UncontrolledForm = () => {
  const inputRef = useRef(null);
  const [submittedValue, setSubmittedValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = inputRef.current.value;

    // use the input value
    console.log(inputValue ? `Form submitted with: ${inputValue}` : 'No input value');
    setSubmittedValue(inputValue);

    // optionally clear the input
    inputRef.current.value = '';
  }

  return (
    <>
      <b>Uncontrolled Components</b>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>Enter any text: </label>
          <input id='textUncontrolled' ref={inputRef} type="text" placeholder='Enter any text' />
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
      <DisplayUncontrolledComponent inputV={submittedValue} />
    </>
  )
}


/* 
Controlled Components
✅ Use Controlled when:
- Real-time validation
- Conditional rendering based on input
- Formatting input (e.g., phone number)
- Disabling submit until form is valid
- Dynamic forms
*/
const ControlledForm = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ username, password }); // data readily available
  }

  return (
    <div>
      <b>Controlled Components</b>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="username">Username: </label>
          <input id='username' placeholder='Please enter your username' value={username} type="text" onChange={(e) => setUserName(e.target.value)} />
          <br />
          <label htmlFor="password">Password: </label>
          <input id='password' placeholder='Please enter your password' value={password} type="text" onChange={(e) => setPassword(e.target.value)} />
          <button disabled={!username || !password} type='submit'>Submit</button>
        </fieldset>
      </form>
    </div>
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
    const el = document.getElementById('showParagraph')
    if (el) el.style.display = 'block'
  }

  const hideParagraph = () => {
    const el = document.getElementById('showParagraph')
    if (el) el.style.display = 'none'
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


      {
        /* Rule of thumb: Prefer controlled components for most cases.
           Use uncontrolled for simple/quick forms or file inputs. */
      }
      <div className={`${styles.noGap}`}>
        <h1 className={styles.borderaQ} onMouseEnter={showParagraph} onMouseLeave={hideParagraph}>Controlled components vs. Uncontrolled components</h1>
        <p className={styles.WhentoUseWhat} id='showParagraph' style={{ display: 'none' }}>
          Rule of thumb: Prefer controlled components for most cases.
          Use uncontrolled for simple/quick forms or file inputs.
        </p>
      </div>

      <UncontrolledForm />
      <ControlledForm />
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