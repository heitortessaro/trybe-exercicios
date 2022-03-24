// const Redux = require('redux');

//    Definir o estado da aplicação
//    INITIAL_STATE 
const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};
//    Adicionar REDUX DEVTOOLS

// <====== Lidando com o estado ======>
const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const RANDOM_COLOR = 'RANDOM_COLOR';
//    Definir as mudanças do estado
//    ACTIONS 

//    Definir como o estado será atualizado
//    REDUCER 
const reducer = (state = INITIAL_STATE, action) => { 
  switch(action.type) {
    case NEXT_COLOR:
      return {
        ...state,        
        index: (state.index >= (state.colors.length - 1))
          ? 0 
          : (state.index + 1),
      };
    case PREVIOUS_COLOR:
      return {
        ...state,        
        index: (state.index <= 0)
          ? (state.colors.length - 1)
          : (state.index - 1),
      };
    case RANDOM_COLOR:
      const newColor = criarCor();
      return {
        ...state,
        index: ((state.colors.length)),
        colors: [...state.colors, newColor],
      }
    default:
      return state;
  }
}

//    Ligar nossa STORE ao Reducer
const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// <====== Alterando e Lendo o estado ======>

//    Lendo o estado
//    GETSTATE | SUBSCRIBE

store.subscribe(() => {
  const { colors, index} = store.getState();
  document.getElementById('value').innerHTML = colors[index];
  document.getElementById('container').style.backgroundColor = `${colors[index]}`;
})


// <====== Adicionando event listeners ======>
const previusAction = () => {
  store.dispatch({ type: PREVIOUS_COLOR });
};

const nextAction = () => {
  store.dispatch({ type: NEXT_COLOR });
};

const randomAction = () => {
  store.dispatch({ type: RANDOM_COLOR });
};

const previousColor = document.getElementById('previous');
const nextColor = document.getElementById('next');
const randomColor = document.getElementById('random');

previousColor.addEventListener('click', previusAction);
nextColor.addEventListener('click', nextAction);
randomColor.addEventListener('click', randomAction);

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}