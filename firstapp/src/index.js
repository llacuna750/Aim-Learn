import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const myInforamtion = {
  name: 'Gabriel D. Llacuna',
  age: 20,
  school: 'USTP',
  yearAndCourse: '3rd Year Computer Science',
}

const display_Information = <div>
  I am <b>{myInforamtion.name}</b>, a <b>{myInforamtion.age}</b>-year-old student from <b>{myInforamtion.school}</b> taking up <b>{myInforamtion.yearAndCourse}</b>. <br />
  I am currently in my 3rd year and I am enjoying my time here at USTP. <br />
  I am looking forward to learning more about React and building amazing projects with it!
</div>

root.render(
  // <React.StrictMode>
  <div>
    <div style={{
      display: 'flex', flexDirection: 'column', gap: '3px'
    }}>
      <h1 style={{
        border: '1px solid', padding: '0px', margin: '20px 20px 0px', textAlign: 'center'
      }}>
        About Me
      </h1>
      <div style={{
        display: 'flex', padding: '20px', margin: '0px 20px 20px', border: '1px solid pink'
      }}>
        {display_Information}
      </div>
    </div>

    <App />
  </div>


  // </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
