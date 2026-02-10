const nomes = [" joão", "MaRIA ", " PEDRO "];

const nomesNovo = nomes.map(nome => nome.trim().toLowerCase());
const nomesNovo2 = nomesNovo.map(nome => nome.charAt(0).toUpperCase() + nome.slice(1))

console.log(nomesNovo2);