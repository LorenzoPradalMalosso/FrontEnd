// Base da estrutura do aplicativo
// É a classe responsável pelos dados

// Será utilizada em outras partes do código
// Classe exportável
export class TarefaModel {
    // Construtor da classe de tarefas
    constructor(){
        this.tarefas = [];
        this.currentId = 1;
    }

    // Métodos
    addTarefa(titulo) {
        const newTarefa = {
            id: this.currentId ++,
            titulo: titulo,
            completed: false
        }; // Coleção
        this.tarefas.push(newTarefa); // Adicionando a tarefa ao vetor
    }

    getTarefas() {
        return this.tarefas;
    } // Busca todas a tarefas do vetor

    atualizarTarefa(id) {
        const tarefa = this.tarefas.find(tarefa => tarefa.id === id);
        if (tarefa) { // Se tarefa for encontrada
            tarefa.completed = !this.tarefas.completed; // Inverte o valor da booleana
        }
    }

    removeTarefa(id) {
        this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
        // Estou reescrevendo o vetor sem a tarefa do id selecionado
    }
}

// O que foi feito
// Criamos a lista de tarefas
// Gera um id automático para a tarefa
// Adiciona tarefa
// Busca as tarefas do vetor
// Altera a tarefa
// Remove a tarefa
