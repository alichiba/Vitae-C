import React from 'react';
// import logo from './logo.svg';
import {  create}
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="App-header">
          <h1>Vitae C</h1>
          <p>Reverse Engineer Your Resume.</p>
        </div>
        <div className="App-side-header">
        <button href="#Statement">Get Started</button>
        </div>
      </header>
      <body>
        <div className="Divider">
          <div className="Tab"></div>
        </div>
        <div className="Statement" id="statement">
          <div>
            <h2>Lights, <br/> Camera, <br/><span>ACTION!</span></h2>
            <p>Every word in your resume defines who you are. Be bold. Unique. Special. Be you.</p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
