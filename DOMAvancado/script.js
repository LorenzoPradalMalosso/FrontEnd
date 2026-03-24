// Adicionar elementos com DOM

// Exemplo de Criação de OBJ com DOM
let header = document.createElement("header");
// Estilização do elemento
header.style.backgroundColor = "black";
header.style.height = "8vh";
// Adicionar elementos ao body
document.body.appendChild(header); // Adicionando o header como elemento filho do body
// Estilização do body
document.body.style.margin = "0"; // Retira a margem padrão do body

// Adicionar elementos ao header
let divNav = document.createElement("div");
divNav.style.display = "flex";
divNav.style.justifyContent = "space-around";
divNav.style.height = "100%";
divNav.style.color = "aliceblue";
divNav.style.alignItems = "center";
divNav.style.fontSize = "5vh";
divNav.style.fontFamily = "Arial";

header.appendChild(divNav); // Adicionando divNav como elemento filho de header

let itensNav = ["Home", "Produtos", "Contato"];
// Adicionar itens na nav
itensNav.forEach((e) => {
  let item = document.createElement("a");
  item.innerText = e;
  item.href= e.toLowerCase()+".html";
  item.style.textDecoration= "none";
  item.style.color= "aliceblue";
  divNav.appendChild(item);
});

// Fazer um Footer com DOM
let footer = document.createElement("footer");
footer.style.backgroundColor = "grey";
footer.style.padding = "20px 20px";
footer.style.height = "4vh";
footer.style.position = "fixed";
footer.style.bottom = "0";
footer.style.width = "100%";
document.body.appendChild(footer);

let divFooter = document.createElement("div");
divFooter.style.fontSize = "2vh";
divFooter.style.fontFamily = "Arial";
divFooter.style.display= "flex";
divFooter.style.justifyContent= "center"
divFooter.innerText = "Copyright © 2024 - Todos os direitos reservados.";
footer.appendChild(divFooter);

// Clonar Elementos com DOM
let card = document.createElement("div");
card.classList.add("card"); // Adiciona a Class Card no elemento => <div class="card">
card.style.width= "120px";
card.style.height= "200px";
card.style.backgroundColor= "blue";
card.style.margin= "1px"
card.style.borderRadius= "10%"

// Criar um container para adicionar os cards
let container = document.createElement("div");
container.classList.add("containter"); // => div.container
container.style.display= "flex";
container.style.justifyContent= "space-around";
container.style.margin= "0 auto";
container.style.width= "90%";
container.style.flexWrap= "wrap"; // Quebra a linha dos elementos filhos

// Criar um botão para clonar as div.card
let btnClonar = document.createElement("button");
btnClonar.innerText= "Clonar";
btnClonar.id= "btnClonar"; // Adicionando um id para o botão
document.body.appendChild(btnClonar); // Adiciona btn ao body
document.body.appendChild(container); // Adiciona container ao body
container.appendChild(card); // Adiciona card ao container

// Criar um método para adicionar evento ao btn
btnClonar.addEventListener("click", ()=>{
    let clonar = card.cloneNode(true); // Clonar o card
    container.appendChild(clonar);
})

// Criar uma chave de Modo claro e escuro
let chave = document.createElement("input") // Tipo input
chave.type= "checkbox";
chave.id= "darkMode";
chave.style.position= "fixed";
chave.style.top= "10px";
chave.style.right= "10px"; // Chave topo a Direita

document.body.appendChild(chave); // Adiciona chave ao body

// Criando evento para chave
chave.addEventListener("change", ()=>{
    document.body.classList.toggle("darkMode");
})