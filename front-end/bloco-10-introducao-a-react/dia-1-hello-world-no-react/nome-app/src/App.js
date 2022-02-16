import './App.css';
import Header from './Header';

const atividades = ['Caminhar', 'Correr', 'Hiking', 'Walking'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <ol>
        {atividades.map((elemento) => Task(elemento))}
      </ol>
    </div>
  );
}

export default App;
