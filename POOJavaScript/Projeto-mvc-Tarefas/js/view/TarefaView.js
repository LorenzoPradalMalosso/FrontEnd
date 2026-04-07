// Classe para organização da interface da aplicação

export class TarefaView {
    constructor() {
        this.tarefaInput = document.getElementById("tarefaInput"); //Entrada da nova tarefa
        this.addTarefaBtn = document.getElementById("addTarefaBtn");
        this.listaTarefas = document.getElementById("listaTarefas");
        this.mensagem = document.getElementById("mensagem");
    }

    getTarefaInputValue() {
        return this.tarefaInput.value.trim();
        // Pega o valo do input
    }

    clearInput() {
        this.tarefaInput.value = "";
        // Limpa o campo do input
    }

    showMensagem(texto) {
        this.mensagem.textContent = texto;
    }

    clearMensagem() {
        this.mensagem.textContent = "";
    }

    // Método para renderizar a tarefa na tela
    renderTarefa(tarefas, atualizar, remover) {
        // Limpar a lista de tarefas
        this.listaTarefas.innerHTML = "";

        tarefas.forEach(tarefa => {
            const li = document.createElement("li");

            if(tarefa.completed) {
                li.classList.add("completed"); // Risca a tarefa se estiver completa
            }

            const span = document.createElement("span");
            span.textContent = tarefa.titulo;

            const action = document.createElement("div");
            action.classList.add("action");

            // Criar um botão para adicionar a tarefa (li)
            const atualizaBtn = document.createElement("button");
            atualizaBtn.textContent = tarefa.completed ? "Desfazer" : "Concluir"; // Operador ternário
            atualizaBtn.addEventListener("click", () => atualizar(tarefa.id));

            // Criar o botão para remover
            const removerBtn = document.createElement("button");
            removerBtn.textContent = "Remover";
            removerBtn.addEventListener("click", () => remover(tarefa.id));

            // Adicionando os BTN a lista de tarefas para cada tarefa
            action.appendChild(atualizaBtn);
            action.appendChild(removerBtn);

            // Adicionando elementos no LI
            li.appendChild(span);
            li.appendChild(action);

            // Adicionando a lista a UL
            this.listaTarefas.appendChild(li);
        });
    }
}

// Pega elementos do HTML
// Le um valor do Input
// Limpa o Input
// Mostra mensagem
// Rendeiza a lista de tarefas