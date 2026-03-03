const prompt = require("prompt-sync")();

let alunos = [];
let listaMaterias = ["Matemática", "Português", "Ciências"];
let texto = "";

do {
    let opcao = String(prompt("O que você deseja fazer?\n1 - Cadastrar Aluno e Nota\n2 - Listar os Alunos\n3 - Encerrar programa\nOpção: "));
    switch (opcao) {
        case "1": // Cadastrar Aluno
            let nome = String(prompt("Digite o nome do Aluno: "));
            let notas = [];
            for (let i = 0; i < 3; i++) {
                notas.push(Number(prompt(`Digite a nota de ${listaMaterias[i]}: `)));
            }
            alunos.push({
                nome: nome,
                notas: notas
            })
            break;
        case "2": // Lista Alunos
            // Dar print das Matérias
            listaMaterias.forEach((x) => {
              texto += x + " | ";
            });
            console.log(texto);
            break;
        case "3": // Sair do programa
            console.log("\nObrigado por utilizar meu programa!\nAté mais...");
            break;
        default:
            continue;
    }
} while (true);