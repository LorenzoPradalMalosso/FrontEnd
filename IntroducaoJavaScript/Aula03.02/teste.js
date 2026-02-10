const prompt = require("prompt-sync")();

var nome = prompt("Digite seu nome: ");
var hora = new Date().getHours();
var saudacao;
if (hora >= 6 && hora <= 12) {
  saudacao = "Bom dia";
}
if (hora >= 12 && hora <= 18) {
  saudacao = "Boa tarde";
} else {
  saudacao = "Boa noite";
}

console.log(`${saudacao}, ${nome}!`);