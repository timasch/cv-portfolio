import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "./App.css";
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

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <hr
        style={{
          height: "5px",
          border: "none",
          color: "#cf3cc3",
          backgroundColor: "#cf3cc3",
        }}
      />

      <div className="header-container">
        <div className="header-item-text">
          <p>Hi!</p>
          <p>
            I am Titta Schroderus and I am Software Developer. More specifically
            Frontend developer. This is my Portfolio page for my projects. My
            main focus is now on React development.
          </p>
          <p>
            Down below you can see short descriptions and links to each project.
          </p>
        </div>
        <div className="header-item-image">
          <img className="header-penguin" src={penguin} alt="penguin" />
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
          <img
            className="logo-image"
            src={graphql}
            alt="GraphQL"
            title="GraphQL"
          />
        </div>
        <div className="logo-item">
          <img className="logo-image" src={node} alt="NodeJS" title="NodeJS" />
        </div>
        <div className="logo-item">
          <img
            className="logo-image"
            src={ubuntu}
            alt="Ubuntu"
            title="Ubuntu"
          />
        </div>
        <div className="logo-item">
          <img className="logo-image" src={linux} alt="Linux" title="Linux" />
        </div>
      </div>
      <hr
        style={{
          height: "5px",
          border: "none",
          color: "#cf3cc3",
          backgroundColor: "#cf3cc3",
          width: "80%",
          margin: "auto",
        }}
      />
      <div className="project-container">
        <div className="project-item">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>React Book table</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">()</Card.Subtitle>
            <Card.Text style={{textAlign: 'left'}}>
            <p>
              This is React Frontend project. It shows information of 10 famous
              books in the table.
            </p>
            <p>
              Data is hardcoded dummy data, so you can test, and
              even delete all books from the table. Just refresh the browser to
              restore the data.
            </p>
            <p>
              This project consist of all CRUD (Create, Read,
              Update and Delete)- operations. Go ahead and try!
            </p> 
            </Card.Text>
            <Card.Link href="https://timasch.github.io/react-book-table">Link to Book Table -project</Card.Link>
            {/* <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
        </Card>
        </div>
      </div>
    </div>
  );
};

export default App;
