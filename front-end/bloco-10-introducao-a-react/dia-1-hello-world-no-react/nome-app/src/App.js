import './App.css';

const atividades = ['Caminhar', 'Correr', 'Hiking', 'Walking'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Exercício 1.
        </p>
        <ol>
          {atividades.map((elemento) => Task(elemento))}
        </ol>
      </header>
    </div>
  );
}

export default App;
