import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

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
      <Footer />



      Lista da primeira atividade:
      <ol>
        {atividades.map((elemento) => Task(elemento))}
      </ol>
    </div>
  );
}

export default App;
