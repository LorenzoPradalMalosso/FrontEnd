// Lógica de funcionamento da lista de Tarefas

// Criar um ouvinte para a tarefa
let btnEnviar = document.getElementById("btnEnviar"); // Objeto para controlar o botão
let tarefa = document.getElementById("tarefa");

btnEnviar.addEventListener(
    "click", criarTarefa
);

// Criar a função para criar a tarefa
function criarTarefa(){
    let texto = tarefa.value.trim();
    // Verificar se tarefa não esá vazia
    if (texto == ""){
        return;
    }
    // Se não tiver vazia => não precisa do else -> vai continuar o código se texto não vazio
    let li = document.createElement("li"); // Criação de um list item
    li.innerHTML = texto+' <button onclick="removerTarefa(this)" class="btnRemove">Remover</button>';
    // Adicionar li => ul
    let ul = document.getElementById("lista");
    ul.appendChild(li); // Adicionando o li a ul via hierarquia
    // Limpa o campo do input
    tarefa.value = "";
};

function removerTarefa(botao){
    botao.parentElement.remove(); // Remove a tarefa da lista
};

// Estilizando pelo DOM
document.body.style.backgroundColor = "#bbb";
document.body.style.textAlign = "center";
document.body.style.fontFamily = "Arial";

let container = document.querySelector(".container");
container.style.width = "50%";
container.style.backgroundColor = "lightblue";
container.style.margin = "auto";
container.style.borderRadius = "15px";

tarefa.style.width = "50%";
tarefa.style.padding = "10px";
tarefa.style.borderRadius = "5px";

btnEnviar.style.padding = "6px 10px";
btnEnviar.style.border = "none";
btnEnviar.style.background = "green";
btnEnviar.style.color = "white";
btnEnviar.style.borderRadius = "5px;"
btnEnviar.style.cursor = "pointer";

let lista = document.getElementById("lista");
lista.style.listStyle = "none";