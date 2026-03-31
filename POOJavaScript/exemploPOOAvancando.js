// Estudos Avançados de POO em JavaScript

// Criação de uma Classe

class Pessoa {
    // Atributos privados (encapsulamento)
    #nome; // Atributo privado (#)
    #idade; // Atributo privado (#)
    #cpf; // Atributo privado (#)

    // Construtor
    constructor(nome, idade, cpf) {
        this.#nome = nome;
        this.#idade = idade;
        this.#cpf = cpf;
    }

    // Getter and Setters
    get getNome() { // Pegam o valor do atributo privado
        return this.#nome;
    }

    get getIdade() { // Pegam o valor do atributo privado
        return this.#idade;
    }

    get getCpf() { // Pegam o valor do atributo privado
        return this.#cpf;
    }

    set setNome(nome) { // Alterar o valor do nome
        this.#nome = nome;
    }

    set setIdade(idade) { // Alterar o valor da idade
        this.#idade = idade;
    }

    // Método de Acesso
    exibirInfo() {
        console.log(
            `Nome: ${this.#nome}\nIdade: ${this.#idade}\nCPF: ${this.#cpf}`
        );
    }
}

// Instanciar Objetos de Pessoas
let pessoa1 = new Pessoa("João", 25, "123.456.789-00");
let pessoa2 = new Pessoa("Maria", "987.654.321-00");

pessoa1.exibirInfo();
pessoa2.exibirInfo();

// Alterar a idade da pessoa 1
pessoa1.setIdade(26);
pessoa1.exibirInfo();

// Herança em POO
class Funcionario extends Pessoa{
    // Novos Atributos
    #cargo;
    #salario;

    // Construtor
    constructor(nome, idade, cpf, cargo, salario) {
        super(nome, idade, cpf); // Chama os atributos da superclasse
        this.#cargo = cargo;
        this.#salario = salario;
    }

    // Métodos públicos (Get e Set)
    get getCargo() {
        return this.#cargo;
    }

    get getSalario() {
        return this.#salario;
    }

    set setCargo(cargo) {
        this.#cargo = cargo;
    }

    set setSalaio(salario) {
        this.#salario = salario;
    }

    // Método de acesso
    exibirInfo() { // Polimorfismo
        super.exibirInfo();
        console.log(`Cargo: ${this.#cargo}\nSalário: ${this.#salario}`);
    }
}

// Instanciar OBJ da classe Funcionário
let funcionario1 = new Funcionario("Pedro", 27, "321.654.987-00", "Motorista", 3000);
funcionario1.exibirInfo();
funcionario1.setSalaio(3500);
funcionario1.exibirInfo();