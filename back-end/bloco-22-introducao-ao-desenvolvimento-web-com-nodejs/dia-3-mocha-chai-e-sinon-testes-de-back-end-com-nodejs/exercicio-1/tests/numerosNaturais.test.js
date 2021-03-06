const { expect } = require('chai');

const {numerosNaturais} = require('../numerosNaturais');

describe('Executa a função numerosNaturais', () => {
  describe('quando o número for maior que 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = numerosNaturais(10);

        expect(resposta).to.be.a('string');
      });

      it('é igual a "positivo"', () => {
        const resposta = numerosNaturais(10);

        expect(resposta).to.be.equals('positivo');
      });
    });
  });

  describe('quando o número for menor que 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = numerosNaturais(-10);

        expect(resposta).to.be.a('string');
      });

      it('é igual a "negativo"', () => {
        const resposta = numerosNaturais(-10);

        expect(resposta).to.be.equals('negativo');
      });
    });
  });

  describe('quando o número for igual a 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = numerosNaturais(0);

        expect(resposta).to.be.a('string');
      });

      it('é igual a "neutro"', () => {
        const resposta = numerosNaturais(0);

        expect(resposta).to.be.equals('neutro');
      });
    });
  });

  describe('quando o valor fornecido não for do típo numérico', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = numerosNaturais('teste');
        expect(resposta).to.be.a('string');
      });

      it('é igual a "o valor deve ser um número" para string', () => {
        const resposta = numerosNaturais('teste');
        expect(resposta).to.be.equals('o valor deve ser um número');
      })

      it('é igual a "o valor deve ser um número" para null', () => {
        const resposta = numerosNaturais(null);
        expect(resposta).to.be.equals('o valor deve ser um número');
      })

      it('é igual a "o valor deve ser um número" para undefined', () => {
        const resposta = numerosNaturais(undefined);
        expect(resposta).to.be.equals('o valor deve ser um número');
      })
    })
  })
});