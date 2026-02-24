const prompt = require("prompt-sync")();

// funções de cálculo
function soma(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function multi(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

// função para pegar números
function pegarNumero() {
  const numero1 = Number(prompt("Digite o 1º Número: "));
  const numero2 = Number(prompt("Digite o 2º Número: "));
  return { numero1, numero2 };
}

// menu
function menu() {
  console.log("=== Calculadora Simples ===");
  console.log("| 1. Soma");
  console.log("| 2. Subtração");
  console.log("| 3. Multiplicação");
  console.log("| 4. Divisão");
  console.log("==========================");
  console.log("Escolha a Operação:");

  const operacao = prompt();
  let resultado;

  switch (operacao) {
    case "1": {
      const { numero1, numero2 } = pegarNumero();
      resultado = soma(numero1, numero2);
      break;
    }
    case "2": {
      const { numero1, numero2 } = pegarNumero();
      resultado = sub(numero1, numero2);
      break;
    }
    case "3": {
      const { numero1, numero2 } = pegarNumero();
      resultado = multi(numero1, numero2);
      break;
    }
    case "4": {
      const { numero1, numero2 } = pegarNumero();
      if (numero2 === 0) {
        console.log("Não dividirás por zero!");
        return;
      }
      resultado = div(numero1, numero2);
      break;
    }
    default:
      console.log("Operação inválida");
      return;
  }

  console.log("Resultado =", resultado);
}

// loop principal
let continuar = true;

while (continuar) {
  menu();
  const escolha = prompt("1. Continuar | 2. Sair: ");
  if (escolha === "2") {
    continuar = false;
    console.log("Saindo...");
  }
}
