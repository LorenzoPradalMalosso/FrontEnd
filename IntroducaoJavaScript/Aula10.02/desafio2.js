const notas = [7.5, 8.0, 4.5, 9.0, 3.5, 6.0];

const notasCorrigidas = notas.filter((nota) => nota >= 6);
const soma = notas.reduce((acum, valorAtual) => acum + valorAtual, 0);
const media = soma / notas.length;
const maior = Math.max(...notas);
const menor = Math.min(...notas);

console.log(
  "Notas corrigidas: " +
    notasCorrigidas +
    "\nMédia: " +
    media +
    "\nMaior: " +
    maior +
    "\nMenor: " +
    menor,
);
