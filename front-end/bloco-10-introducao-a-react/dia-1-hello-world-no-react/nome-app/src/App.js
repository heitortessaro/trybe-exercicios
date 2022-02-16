import './App.css';
import Header from './Header';
import Content from './Content';

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
      <Content />
      <ol>
        {atividades.map((elemento) => Task(elemento))}
      </ol>
    </div>
  );
}

export default App;
