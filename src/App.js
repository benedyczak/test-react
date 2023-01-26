import React, { createContext, useState } from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg" className="App-logo" alt="logo" />
        <p> Léonard Bénédyczak</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lien vers Google
        </a>
        <button>Cliquez</button>
      </header>

    </div>
  );
}

export default App;
