import logo from './logo.svg';
import './App.css';
import NameList from './components/NameList'
import List from './components/List';
import DeliciousFood from './components/DeliciousFood';
import MyComponents from './MyComponents';


function App() {
  return (
    <div className="App">
      <h1>List of Names</h1>
      <NameList />

      <h1>List of Fruits</h1>
      <List />

      <h3>Food Sell</h3>
      <DeliciousFood />

      <h3>useState() Hooks</h3>
      <MyComponents />

      
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
