//Desafio

//Criar um Jogo de N° Aleatório
import promptSync from "prompt-sync";
const prompt = promptSync();

const numSort = Math.round(Math.random() * 100);
var tentativas = 0;

while (true) {
  var numero = Number(prompt("Digite o número (0 - 100): "));
  tentativas++;

  if (numero > numSort) {
    console.log("O número sorteado é menor");
  }
  if (numero < numSort) {
    console.log("O número sorteado é maior");
  }
  if (numero === numSort) {
    break;
  }
}

console.log("Você acertou com: " + tentativas + " tentativas.");