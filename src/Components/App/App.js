import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Camera from '../Camera/Camera';

function App() {
  return (
    <div className="App">
      <header>
        <div className="App-header">
        <img className="logo" src="./images/vc2.png"></img>
          <h1>Vitae C</h1>
          <p>Reverse Engineer Your Resume.</p>
        </div>
        <div className="App-side-header">
        <a href="#statement"><button>Get Started</button></a>
        </div>
      </header>
      <body>
        <div className="Divider">
          <div className="Tab"></div>
        </div>
        <div className="Segment" id="statement">
          <div className="Statement-text">
            <h2>Lights, <br/> Camera, <br/><span>ACTION!</span></h2>
            <p>Every word in your resume defines who you are. Be bold. Unique. Special. Be you.</p>
          </div>
          <Camera></Camera>
        </div>
        <div className="Divider">
          <div className="Tab"></div>
          <div className="Tab"></div>
        </div>
        <div className="Segment">

        </div>
      </body>
    </div>
  );
}

export default App;
