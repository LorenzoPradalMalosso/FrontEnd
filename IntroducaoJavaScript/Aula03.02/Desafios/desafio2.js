const prompt = require("prompt-sync")();

let numero = prompt("Digite o número que eu faço a tabuada: ");
console.log(`\nTabuada do ${numero}:`)
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`)
}