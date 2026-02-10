const prompt = require("prompt-sync")();

while (true){
    let idade = prompt("Digite sua idade: ");
    if (idade >= 1 && idade <= 17) {
        console.log("Você é menor de idade!");
        break;
    }
    else if (idade >= 18 && idade <= 59) {
        console.log("Você é maior de idade!");
        break;
    }
    else if (idade >=60 && idade <=120){
        console.log("Você é idoso");
        break;
    }
    else {
        console.log("Digite uma idade válida");
        continue;
    }
}