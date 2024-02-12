import './App.css';
import {useState} from 'react';

function App() {

  const [uczen, setUczen] = useState(
    {imie:"Jan", nazwisko:"Kot", klasa:4}
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Uczeń</h1>
      </header>
      <button onClick={() => setUczen({imie: uczen.imie, nazwisko: uczen.nazwisko, klasa:uczen.klasa+1})}>Promocja</button>
      <p>{uczen.imie} {uczen.nazwisko} {uczen.klasa}</p>
    </div>
  );

    /*
  function promocja () {
    let u = {imie: uczen.imie, nazwisko: uczen.nazwisko, klasa:uczen.klasa+1};
    setUczen(u);
  }
  */





}

export default App;
