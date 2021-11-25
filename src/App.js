import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./components/CVNavbar";
import penguin from "./images/penguin.png";
import css from "./images/CSS.png";
import html from "./images/HTML.png";
import js from "./images/JS.png";
import react from "./images/REACT.png";
import linux from "./images/LINUX.jpeg";
import graphql from "./images/GraphQL.png";
import ubuntu from "./images/orb_ubuntu_white.png";
import node from "./images/nodeJS.png";

/* Grid 1: introduction text + image
   Grid 2: logos of techs
   Grid 3: project cards
   => flex them!
*/
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <hr style={{height: "5px", border: "none", color: "#cf3cc3", backgroundColor: "#cf3cc3"}}/>

      <div className="header-container">
        <div className="header-item-text">
          <p>
          Curabitur ullamcorper sed sapien sed vehicula. 
          Ut elementum lacinia elit, quis malesuada enim tincidunt vitae. 
          Donec imperdiet condimentum sapien, sed imperdiet nisl convallis sed. 
          Aliquam dolor arcu, auctor non rutrum vitae, vestibulum vel neque. 
          Suspendisse vitae neque laoreet, facilisis justo vel, viverra ipsum. 
          Fusce egestas sem ac convallis molestie. Vestibulum lobortis velit 
          in tellus suscipit, at hendrerit nisi pharetra.  
          </p>
        </div>
        <div className="header-item-image">
          <img className="header-penguin" src={penguin}  alt="penguin" />
        </div>
      </div>
      
      <div className="logo-container">
        <div className="logo-item">
        <img className="logo-image" src={html} alt="HTML" title="HTML" />
        </div>
        <div className="logo-item">
          <img className="logo-image" src={css} alt="CSS" title="CSS" />
        </div>
        <div className="logo-item">
        <img className="logo-image" src={js} alt="JS" title="JavaScript" />
        </div>
        <div className="logo-item">
        <img className="logo-image" src={react} alt="React" title="ReactJS" />
        </div>
        <div className="logo-item">
        <img className="logo-image" src={graphql} alt="GraphQL" title="GraphQL" />
        </div>
        <div className="logo-item">
        <img className="logo-image" src={node} alt="NodeJS" title="NodeJS" />
        </div>
        <div className="logo-item">
        <img className="logo-image" src={ubuntu} alt="Ubuntu" title="Ubuntu" />
        </div>
        <div className="logo-item">
        <img className="logo-image" src={linux} alt="Linux" title="Linux" />
        </div>
      </div>
      <hr style={{height: "5px", border: "none", color: "#cf3cc3", backgroundColor: "#cf3cc3", width: "80%", margin: "auto"}}/>
      <div className="project-container">
        <div className="project-item">
          
        </div>
      </div>
      {/* <div id="myCanvasContainer">
        <canvas id="myCanvas" width="500" height="500">
          <ul>
            <li><a data-weight="25" href="https://en.wikipedia.org/wiki/HTML" target="_blank" rel="noreferrer">HTML</a></li>
            <li><a data-weight="25" href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank" rel="noreferrer">CSS</a></li>
            <li><a data-weight="25" href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noreferrer">ES5/ES6</a></li>
            <li><a data-weight="25" href="https://en.wikipedia.org/wiki/Representational_state_transfer" target="_blank" rel="noreferrer">REST</a></li>
            <li><a data-weight="25" href="https://en.wikipedia.org/wiki/JSON" target="_blank" rel="noreferrer">JSON</a></li>
            <li><a data-weight="25" href="https://en.wikipedia.org/wiki/Node.js" target="_blank" rel="noreferrer">Node JS</a></li>
            <li><a data-weight="25" href="https://en.wikipedia.org/wiki/Git" target="_blank" rel="noreferrer">Git</a></li>
            <li><a data-weight="25" href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)" target="_blank" rel="noreferrer">Bootstrap</a></li>
            <li><a data-weight="25" href="https://reactjs.org" target="_blank" rel="noreferrer">ReactJS</a></li>
            <li><a data-weight="25" href="https://npmjs.com/" target="_blank"rel="noreferrer">npm</a></li>
            <li><a data-weight="25" href="https://" target="_blank" rel="noreferrer">MongoDB</a></li>
          </ul>
          </canvas>
      </div> */}
    </div>
  );
}

export default App;
