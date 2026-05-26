// obtém referência ao input que funciona como visor
const tela = document.getElementById('tela');

// adiciona um caractere (número, ponto ou operador) ao final da expressão
function adicionar(valor) {
    // concatena o valor ao conteúdo atual do visor
    tela.value += valor;
}

// remove o último caracter que está na expressão
function apagar() {
    tela.value = tela.value.slice(0, -1);
}

// limpa completamente o visor, zerando a expressão
function limpar() {
    tela.value = '';
}

// tenta avaliar a expressão exibida no visor
function calcular() {
    try {
        // só calcula se houver algo no visor
        if (tela.value !== '') {
            // eval interpreta a string como código JS e retorna o resultado
            tela.value = eval(tela.value);
        }
    } catch (erro) {
        // se a expressão for inválida, mostra mensagem de erro
        tela.value = 'Erro';
    }
}
