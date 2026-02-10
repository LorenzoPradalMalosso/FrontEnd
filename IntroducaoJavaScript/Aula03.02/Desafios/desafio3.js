const prompt = require("prompt-sync")();

let numero = prompt("Digite o número: ");
if (numero % 2 == 0) {
    console.log("O número é par!");
}
else {
    console.log("O número é ímpar!")
}

console.log("\nNúmeros pares de 1 a 20:")
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
      console.log(`O número ${i} é par!`);
    }
    else {
      continue;
    }
}