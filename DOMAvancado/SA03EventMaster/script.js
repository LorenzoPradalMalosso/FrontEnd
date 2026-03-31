// Vetor dos convidados
let convidados = [];

// Evento do formulário
let formulario = document.querySelector("#formulario");

// Pegando elementos do HTML
let nomeInput = document.querySelector("#nome");
let emailInput = document.querySelector("#email");
let telefoneInput = document.querySelector("#telefone");
let idadeInput = document.querySelector("#idade");
let cpfInput = document.querySelector("#cpf");
let mensagem = document.querySelector("#mensagem");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  let nome = nomeInput.value.trim();
  let email = emailInput.value.trim();
  let telefone = telefoneInput.value.trim();
  let idade = idadeInput.value.trim();
  let cpf = cpfInput.value.trim();

  if (nome === "" || email === "" || telefone === "" || idade === "" || cpf === "") {
    mensagem.innerText = "Erro: todos os 5 campos devem ser preenchidos.";
    mensagem.style.color = "red";
    return;
  }

  convidados.push({nome: nome, email: email, telefone: telefone, idade: idade, cpf: cpf});

  mensagem.innerText = "Cadastro realizado com sucesso!";
  mensagem.style.color = "green";

  atualizarLista();
  limparFormulario();

  limparMsg3Seg();
});



// Pegando elemento do HTML
let listaConfirmados = document.querySelector("#listaConfirmados");

// Atualizar lista de confirmados
function atualizarLista() {
  listaConfirmados.innerHTML = "";

  convidados.forEach((convidado, index) => {
    let card = document.createElement("div");
    card.classList.add("cardConvidado");

    let texto = document.createElement("span");
    texto.innerText = `${convidado.nome} - ${convidado.email}`;

    let btnRemover = document.createElement("button");
    btnRemover.innerText = "Remover";

    btnRemover.addEventListener("click", () => {
      convidados.splice(index, 1);
      atualizarLista();
    });

    card.appendChild(texto);
    card.appendChild(btnRemover);
    listaConfirmados.appendChild(card);
  });
}



//Pegando elemento do HTML
let btnModoEscuro = document.querySelector("#modoEscuro");

// Alternar modo escuro
btnModoEscuro.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});



// Evento de teclado -> ESC limpa o formulário
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    limparFormulario();
    mensagem.innerText = "Formulário limpo com a tecla ESC.";
    mensagem.style.color = "orange";

    limparMsg3Seg();
  }
});



// Funções Complementares

// Limpar mensagem após 3 segundos
function limparMsg3Seg() {
    setTimeout(() => {
      mensagem.innerText = "";
    }, 3000);
}

// Limpar formulário
function limparFormulario() {
  formulario.reset();
}