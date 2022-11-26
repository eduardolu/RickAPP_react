import imageRockMorty from './img/rick-morty.png';
import './App.css';
import {useState} from "react";
import Characters from './components/characters';

function App() {
  const [caracters,setCaracters] = useState(null);
  const reqApi = async () => {
    const API = await fetch("https://rickandmortyapi.com/api/character");
    const CharactAPI = await API.json();
    console.log({CharactAPI});
    setCaracters(CharactAPI.results);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        { caracters ? (
          <Characters caracters = {caracters} setCaracters = {setCaracters}/>
        ):(
          <>
          <img src={imageRockMorty} alt="Rick & Morty" className="img-home"/>
          </>
        )}
        <button onClick={reqApi} className="btn-search">buscar personajes</button>
      </header>
    </div>
  );
}

export default App;
