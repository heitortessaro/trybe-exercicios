import data from './data.js';
import Pokedex from './Components/Pokedex.jsx';
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex pokemonList={data} />
    </div>
  );
}

export default App;
