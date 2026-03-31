// Estudos de POO em Java Script
// Diferença entre Procedural e POO

// Declaração de uma variável em Procedural

let produto1 = {
    nome: "Impressora",
    preco: 1000,
    marca: "HP",
    disponivel: true,
    desconto: function(){
        return this.preco * 0.1; // Desconto de 10% quando solicitado
    }
} // Coleção

let produto2 = {
    nome: "WebCam",
    preco: 550,
    marca: "MultiLaser",
    disponivel: false,
    desconto: function(){
        return this.preco * 0.2; // Desconto de 20% WebCam
    }
}

// Imprimindo informações do produto
console.log(`
    Produto: ${produto1.nome}, 
    Preço: ${produto1.preco}, 
    Marca: ${produto1.marca}, 
    Disponível: ${produto1.disponivel ? "Sim" : "Não"}, 
    Desconto: ${produto1.disponivel ? produto1.desconto() : ""}`);

// Declaração de uma classe para criação de um obj (produto) usando POO
class Produto {
    // Atributos
    nome;
    preco;
    marca;
    disponivel;

    // Métodos
    // Construtor
    constructor(nome, preco, marca, disponibilidade) {
        this.nome = nome;
        this.preco = preco;
        this.marca = marca;
        this.disponivel = disponibilidade;
    }

    // Método para aplicar desconto
    desconto(){
        return this.preco * 0.1; // 10% de desconto
    }

    toString() {
        return `Produto: ${this.nome}, 
                Preço: ${this.preco}, 
                Marca: ${this.marca}, 
                Disponível: ${this.disponivel ? "Sim" : "Não"}, 
                Desconto: ${this.disponivel ? this.desconto() : ""}`
    }
}

// Declara meus produtos
let p1 = new Produto("Microfone", 600, "Elgin", true);
let p2 = new Produto("Headset", 150, "Dragon", true);

console.log(p1.toString());