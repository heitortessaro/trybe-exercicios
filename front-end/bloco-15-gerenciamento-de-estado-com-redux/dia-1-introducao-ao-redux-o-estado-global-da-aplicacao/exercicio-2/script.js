import { redux, createStore, combineReducers } from 'redux';

const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const ALTERA_NOME_1 = 'ALTERA_NOME_1';
const ALTERA_SOBRENOME_1 = 'ALTERA_SOBRENOME_1';
const ALTERA_NOME_2 = 'ALTERA_NOME_2';
const ALTERA_SOBRENOME_2 = 'ALTERA_SOBRENOME_2';

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case ALTERA_NOME_1:
      return{
        ...state,
        nome: action.name,
      };
    case ALTERA_SOBRENOME_1:
      return {
        ...state,
        sobrenome: action.sobrenome,
      }
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case ALTERA_NOME_2:
      return{
        ...state,
        nome: action.name,
      };
    case ALTERA_SOBRENOME_2:
      return {
        ...state,
        sobrenome: action.sobrenome,
      }
    default:
      return state;
  }
};

const reducerCombinado = combineReducers({
  meuPrimeiroReducer,
  meuSegundoReducer,
});

const store = createStore(reducerCombinado);



