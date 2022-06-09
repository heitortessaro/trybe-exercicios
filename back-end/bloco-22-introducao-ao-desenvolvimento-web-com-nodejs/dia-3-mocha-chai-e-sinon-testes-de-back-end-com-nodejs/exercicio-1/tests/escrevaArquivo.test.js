const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');

const {escreveArquivo} = require('../escreveArquivo');

describe('Executa a função escreveArquivo', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });
  describe('a resposta', () => {
    it('é uma "string"',  () => {
      const resposta =  escreveArquivo('arquivo.txt', '#vqv conteúdo');

      expect(resposta).to.be.a('string');
    });

    it('é igual a "ok"',  () => {
      const resposta =  escreveArquivo('arquivo.txt', '#vqv conteúdo');

      expect(resposta).to.be.equals('ok');
    });
  });
});