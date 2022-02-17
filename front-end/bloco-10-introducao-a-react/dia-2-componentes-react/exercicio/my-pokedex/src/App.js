import data from './data.js';
import Pokemon from './Components/Pokemon.jsx';

function App() {
  return (
    <div className="App">
      <Pokemon pokemon={data[0]} />
    </div>
  );
}

export default App;
