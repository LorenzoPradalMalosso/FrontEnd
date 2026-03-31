// Evento de verificação de formulário

// Criar o formulário com DOM
let form = document.createElement("form");
form.id = "formCadastro";
document.body.appendChild(form); // Adiciona o form ao Body

// Input para nome
let inputNome = document.createElement("input");
inputNome.type = "text";
inputNome.placeholder = "Digite seu nome";
inputNome.id = "nome";
form.appendChild(inputNome);

// Input para email
let inputEmail = document.createElement("input");
inputEmail.type = "text";
inputEmail.placeholder = "Digite seu Email";
inputEmail.id = "email";
form.appendChild(inputEmail);

// Botão Enviar
let btnEnviar = document.createElement("button");
btnEnviar.innerText = "Enviar";
btnEnviar.type = "submit";
form.appendChild(btnEnviar);

// Adicionar um parágrafo para enviar uma mensagem de validação
let p = document.createElement("p");
p.id = "mensagem";
document.body.appendChild(p);

// Evento de validação do formulário
document.getElementById("formCadastro").addEventListener("submit", (event)=>{
    // Evitar o recarregamento da página
    event.preventDefault();
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let mensagem = document.getElementById("mensagem");

    // Condição
    if(nome.value === "" || email.value === ""){
        mensagem.innerText = "Preencha todos os campos!";
        mensagem.style.color = "red";
    } else{
        mensagem.innerText = "Cadastro realizado com sucesso!"
        mensagem.style.color = "green";
        // Limpa os campos
        nome.value = "";
        email.value = "";
    }
})