import React from "react";
import Projects from "./Projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Xunaxidonita</h1>
        <menu>
          <a href="#1">About me</a>
          <a href="#2">Portfolio</a>
          <a href="#3">Contact</a>
          <a href="#3">Resume</a>
        </menu>
      </header>
      <main>
        <Projects></Projects>
      </main>
    </div>
  );
}

export default App;
