import React, { Component } from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render() {
    const printObj = ({conteudo, bloco, status}) => {
     return ( 
        <div>
          <h3>O conteúdo é: {conteudo}</h3>
          <p>Status: {status}</p>
          <p>Bloco: {bloco}</p>
        </div>
     )
    };

    return (
      <div>
        {conteudos.map((elemento) => printObj(elemento))}
      </div>
    );
  }
}

// class Content extends React.Component {
//   render() {
//     return(
//       <div className="content">
//         {conteudos.map((elem) => (
//           <div key={elem.conteudo} className="card">
//             <h4>{`O conteudo é: ${elem.conteudo}`}</h4>
//             <p>{`status: ${elem.status}`}</p>
//             <p>{`bloco: ${elem.bloco}`}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

export default Content;