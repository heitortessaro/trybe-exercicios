const imc = (peso, altura) => console.log(`Para uma altura de ${altura}m e uma massa de ${peso}kg, o IMC é: ${peso/(altura**2)}`);


module.exports = {
  imc,
};