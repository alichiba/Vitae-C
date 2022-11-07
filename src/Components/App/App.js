import React from 'react';
import './App.css';
import Camera from '../Camera/Camera';
import Verbs from '../Verbs/Verbs';
import Statements from '../Statements/Statements';
import Upload from '../Upload/Upload';


function App() {
  return (
    <div className="App">
      <header>
        <div className="App-header">
        <img className="logo" src="./images/vc2.png"></img>
          <h1>Vitae C</h1>
          <p>Reverse Engineer Your Resume.</p>
          <a href="#lights">
          <button>Get Started</button></a>
        </div>
      </header>
    
      <body>
       {/* tab 1: getting started */}
        <div className="Divider">
          <div className="Tab">
            <img className="tab-logo" src="./images/vc2.png"></img>
            <a href="#lights">
              <p className="tab-title">Lights, Camera, Action</p>
            </a>
          </div>
        </div>
        <div className="Segment" id="lights">
          <div className="Statement-text">
            <h2>Lights, <br/> <span1>Camera</span1>, <br/><span>ACTION!</span></h2>
            <font size="+3"><p>Every word in your resume <br></br> defines who you are. Be bold. <br></br> Unique. Special. Be you.</p></font>
          </div>
          <a href="#verbs">
            <Camera></Camera>
          </a>
        </div>
        {/* tab 2: expressions */}
        <div className="Divider">
          <div className="Tab">
            <img className="tab-logo" src="./images/vc2.png"></img>
            <a href="#lights">
              <p className="tab-title">Lights, Camera, Action</p>
            </a>
          </div>
          <div className="Tab">
            <img className="tab-logo" src="./images/vc2.png"></img>
            <a href="#verbs">
            <p className="tab-title">Expressions</p>
            </a>
          </div>
        </div>
        <div className="Segment-verbs" id="verbs">
          <h2>Expressions to define a wholesome being &#8212; YOU!</h2>
          <div className="Verb-menu">
            <div className='Verb-section'>
            <Verbs title="Creativity & Critical Thinking" verbs={['Analyzed', 'Brainstormed', 'Conceptualized', 'Curated', 'Derived', 'Drafted', 'Designed', 'Developed', 'Evaluated', 'Invented', 'Investigated', 'Modelled', 'Outlined', 'Published', 'Researched', 'Strategized', 'Visualized', 'Wrote']} />
            </div>
            <div className='Verb-section'>
            <Verbs title="Leadership & Management" verbs={['Augmented', 'Cultivated', 'Delegated', 'Directed', 'Empowered', 'Enforced', 'Ensured', 'Facilitated', 'Guided', 'Inspected', 'Inspired', 'Leveraged', 'Mentored', 'Motivated', 'Optimized', 'Supervised', 'Trained', 'Verified']} />
            </div>
            <div className='Verb-section'>
            <Verbs title="Technical Expertise" verbs={['Accelerated', 'Assembled', 'Autheticated', 'Automated', 'Branched', 'Boosted', 'Calibrated', 'Certified', 'Configured', 'Constructed', 'Extracted', 'Integrated', 'Launched', 'Prototyped', 'Replicated', 'Routed', 'Systemized', 'Tested']} />
            </div>
          </div>
        </div>
        {/* tab 3: compelling statements */}
        <div className="Divider">
          <div className="Tab">
            <img className="tab-logo" src="./images/vc2.png"></img>
            <a href="#lights">
              <p className="tab-title">Lights, Camera, Action</p>
            </a>
          </div>
          <div className="Tab">
            <img className="tab-logo" src="./images/vc2.png"></img>
            <a href="#verbs">
              <p className="tab-title">Expressions</p>
            </a>
          </div>
          <div className="Tab">
            <img className="tab-logo" src="./images/vc2.png"></img>
            <a href="#good-statements">
              <p className="tab-title">Compelling Statements</p>
            </a>
          </div>
        </div>
        <div className="Segment-rats" id="good-statements">
          <h2>Compelling Statements</h2>
          <Statements example="Increased Instagram following by 3000+ followers (90% increase) through relevant, insightful and algorithm-optimized content at ABC strategies."></Statements>
          <Statements example="Re-engineered account software systems and developed a new user interface that increased customer satisfaction by 35%."></Statements>
          <Statements example="Raised over $1000 for UBC Biztech by collaborating with two CUS clubs to organize a two-day campus wide bootcamp."></Statements>
        </div> 
        {/* tab 4: non-compelling statements */}
        <div className="Divider">
          <div className="Tab">
            <img className="tab-logo" src="./images/vc2.png"></img>
            <a href="#lights">
              <p className="tab-title">Lights, Camera, Action</p>
            </a>
          </div>
          <div className="Tab">
            <img className="tab-logo" src="./images/vc2.png"></img>
            <a href="#verbs">
              <p className="tab-title">Expressions</p>
            </a>
          </div>
          <div className="Tab">
            <img className="tab-logo" src="./images/vc2.png"></img>
            <a href="#good-statements">
              <p className="tab-title">Compelling Statements</p>
            </a>
          </div>
          <div className="Tab">
            <img className="tab-logo" src="./images/vc2.png"></img>
            <a href="#bad-statements">
              <p className="tab-title">Not-So-Great Statements</p>
            </a>
          </div>
        </div>
        <div className="Segment-rats" id="bad-statements">
          <h2>Not-Great Statements</h2>
          <Statements example="Responsible for handling customer service calls in calm and informative manner."></Statements>
          <Statements example="Used a computer software to create a cool program that changes font sizes."></Statements>
          <Statements example="Tasked with packing used items into a goodie bag to donate to non-profit organizations"></Statements>
        </div> 
        {/* tab 5 */}
        <div className="Divider">
          <div className="Tab">
            <img className="tab-logo" src="./images/vc2.png"></img>
            <a href="#lights">
              <p className="tab-title">Lights, Camera, Action</p>
            </a>
          </div>
          <div className="Tab">
            <img className="tab-logo" src="./images/vc2.png"></img>
            <a href="#verbs">
              <p className="tab-title">Expressions</p>
            </a>
          </div>
          <div className="Tab">
            <img className="tab-logo" src="./images/vc2.png"></img>
            <a href="#good-statements">
              <p className="tab-title">Compelling Statements</p>
            </a>
          </div>
          <div className="Tab">
            <img className="tab-logo" src="./images/vc2.png"></img>
            <a href="#bad-statements">
              <p className="tab-title">Not-So-Great Statements</p>
            </a>
          </div>
          <div className="Tab">
            <img className="tab-logo" src="./images/vc2.png"></img>
            <a href="#ats">
              <p className="tab-title">ATS Check</p>
            </a>
          </div>
        </div>
        <div className="Segment" id="ats">
          <Upload></Upload>
        </div>
      </body>
    </div>
  );
}

export default App;
