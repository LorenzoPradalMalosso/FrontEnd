//Funções de String

const mensagem = " JavaScript é Incirível ";

//Contar quantos caracteres tem a variável
console.log(mensagem.length); //23

//MAIÚSCULAS e minúsculas
console.log(mensagem.toUpperCase()); // JAVASCRIPT É INCRÍVEL
console.log(mensagem.toLowerCase()); // javascript é incrível

//Substituição de partes da String
const mensagem2 = mensagem.replace("Java", "Type");
console.log(mensagem2); // TypeScript é incrível

//Partes do texto
console.log(mensagem.substring(0, 5)); // " Java"
console.log(mensagem.slice(-11)); //JavaScript

//Tesoura (trim)
console.log(mensagem.trim()); //remove espaços antes e depois do texto

//Separação de String
const mensagem3 = "Boa Tarde Com Muita Alegria";
const array = mensagem3.split(" "); //usando o espaço para separar a frase e transformar em vetor
console.log(array);