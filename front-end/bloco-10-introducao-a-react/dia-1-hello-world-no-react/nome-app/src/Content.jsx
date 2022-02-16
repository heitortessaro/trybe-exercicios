import { Component } from "react";



class Content extends Component {

  render() {

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

    const printObj = ({conteudo, bloco, status}) => {
      return (
        <div>
          <p>O conteúdo é: {conteudo}</p>
          <p>Status: {status}</p>
          <p>Bloco: {bloco}</p>
        </div>
      )
    };

    return (
      conteudos.map((elemento) => printObj(elemento))
    );
  }
}