interface Estudante {
    id: number;
    nome: string;
    notas: number[];
}

function calcularMedia(e: Estudante): void{
    const soma = e.notas.reduce((acc, n) => acc + n, 0);
    const media = e.notas.length === 0 ? 0 : soma / e.notas.length;
    console.log(`Aluno: ${e.nome}`);
    console.log(`Notas: ${e.notas}`);
    console.log(`Média: ${media}`);
    if (media >= 7) {
        console.log("Aluno aprovado!");
    } else {
        console.log("Aluno reprovado!");
    }
    console.log("======================");
}

console.log("Sistema de aprovação de alunos");
console.log("======================");

const alunos: Estudante[] = [
    {
        id: 1,
        nome: "Lorenzo",
        notas: [10, 9, 8],
    },
    {
        id: 2,
        nome: "Murilo",
        notas: [1, 2, 3],
    }
];

alunos.forEach((aluno) => {
    calcularMedia(aluno);
});