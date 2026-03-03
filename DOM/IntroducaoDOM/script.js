// DOM => Document Object Model

// Script de Manipulação DOM

// getElementById => variavel Simples - Id é sempre única
// Usar sempre o document para manipular o DOM
let titulo = document.getElementById("titulo"); // Busca no html o elemento com a id correspondente
console.log(titulo); // Mostra a informação da id
titulo.innerText = "Outro Título para o Site"; // Modifica o conteúdo da ID

// getElementByTagName => Vetor (Array) de elementos
let paragrafo = document.getElementsByTagName("p"); // html => p
paragrafo[0].innerText = "Exemplo de Parágrafo Mofificado por DOM"; // Modificar elemento
paragrafo[1].style.color = "red"; // Modificar o Style do elemento

// getElementByClassName = > Vetor de elementos
let descricao = document.getElementsByClassName("descricao");
// Modificar elementos do array
for (let i = 0; i < descricao.length; i++) {
  descricao[i].style.color = "blue";
}

// querySelector => Variável simples = Seleciona sempre o primeiro elemento com a seletor
let p = document.querySelector("p");
// Modificar a fonte
p.style.fontWeight = "bold";

// querySelectorAll => Vetor de Elementos => Seleciona todos os elementos
let descricaoAll = document.querySelectorAll(".descricao");
descricaoAll.forEach((e) => (e.style.fontWeight = "bold"));

// Eventos Listener (ouvintes)

// Chamar pelo nome da função
function MudarCorFundo() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "green";
}

// Chamar diretamente no script o ouvinte
document.getElementById("btnColor").addEventListener("click", OutraCor);

function OutraCor() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "orange";
}
