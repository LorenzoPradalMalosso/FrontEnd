const prompt = require("prompt-sync")();

let continuar = true;

do {
  if (continuar == true) {
    let qntdNotas = Number(prompt("Quantidade de notas a serem inseridas: "));
    let notas = [];
    for (let i = 0; i < qntdNotas; i++) {
      let nota = Number(prompt(`Digite a ${i + 1}° nota: `));
      notas.push(nota);
    }
    let media = (notas.reduce((soma, e) => soma + e) / qntdNotas);
    console.log(`\nNotas dos Aluns: ${notas}\nMédia do Aluno: ${media}\n`);
    let decisao = String(prompt("Deseja continuar?\n1 - Sim\n2 - Nao\nEscolha: "));
    if (decisao === "1" || decisao === "sim") {
        continuar = true;
        continue;
    } else {
        continuar = false;
        continue;
    }
  } else {
      break;
  }
} while (continuar == true);