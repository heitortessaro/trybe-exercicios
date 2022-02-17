import data from './data.js';
// import Pokemon from './Components/Pokemon.jsx';
import Pokedex from './Components/Pokedex.jsx';

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex pokemonList={data} />
    </div>
  );
}

export default App;
