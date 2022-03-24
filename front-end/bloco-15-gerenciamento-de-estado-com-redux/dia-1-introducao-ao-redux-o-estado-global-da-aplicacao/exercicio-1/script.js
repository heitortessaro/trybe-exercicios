// const Redux = require('redux');

//    Definir o estado da aplicação
//    INITIAL_STATE 
const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};
//    Adicionar REDUX DEVTOOLS

// <====== Lidando com o estado ======>
// const CHANGE_THEME = 'CHANGE_THEME'
//    Definir as mudanças do estado
//    ACTIONS 

//    Definir como o estado será atualizado
//    REDUCER 
const reducer = (state = INITIAL_STATE, action) => { 
  switch(action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,        
        index: (state.index >= state.colors.length)
          ? 0 
          : state.index + 1,
      };
    case 'PREVIOUS_COLOR':
      return {
        ...state,        
        index: (state.index <= 0)
          ? state.colors.length - 1 
          : state.index - 1,
      };
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
