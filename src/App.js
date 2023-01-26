import './App.css';
import { useState } from 'react';

function Compteur(){
  console.log("vous avez cliqué");
  const [compt, Setcompt] = useState(0);
  function incrementateur(){
    Setcompt(compt+1)
  }
  return(
    <div>
      <button onClick={incrementateur}>Cliquez</button>
      <p>J'ai cliqué {compt} fois</p>
    </div>
  )
}




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg" className="App-logo" alt="logo" />
        <p> Léonard Bénédyczak</p>
        <a
          className="App-link"
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lien vers Google
        </a>
        
      
        <Compteur/>
      </header>

    </div>
  );
}

export default App;