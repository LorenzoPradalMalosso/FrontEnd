//Desafio

// Converta o Texto: " João, mariA, NicolaS, SocoRRo, zuLeica"
// em um Array no Seguinto Formato: ["João","Maria","Nicolas","Socorro","Zuleica"]
const nomes = " João, mariA, NicolaS, SocoRRo, zuLeica";


const array = nomes.split(",");

const arrayNovo = array.map((nome) => nome.trim().toLowerCase());
const arrayCerto = arrayNovo.map(
  (nome) => nome.charAt(0).toUpperCase() + nome.slice(1),
);

console.log(arrayCerto);