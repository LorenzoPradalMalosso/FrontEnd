const prompt = require("prompt-sync")();

class Funcionario {
  nome;
  salario;
  cargo;

  constructor(nome, salario, cargo) {
    this.nome = nome;
    this.salario = salario;
    this.cargo = cargo;
  }

  aumentarSalario(percentual) {
    if (percentual <= 0) {
      console.log("Percentual inválido!");
    } else {
      this.salario += this.salario * (percentual / 100);
    }
  }

  exibirInfo() {
    console.log(
      `\nNome: ${this.nome} | Salário: R$${this.salario} | Cargo: ${this.cargo}.`,
    );
  }
}

let funcionario1 = new Funcionario("Carlos", 3500, "Auxiliar Administrativo");
let funcionario2 = new Funcionario("Mariana", 5200, "Analista de Sistemas");
let funcionario3 = new Funcionario("Roberto", 7800, "Gerente Financeiro");

funcionario1.aumentarSalario(Number(prompt(`Salário do funcionário ${funcionario1.nome}: ${funcionario1.salario}\nPercentual a ser aumentado: `)));
funcionario2.aumentarSalario(Number(prompt(`Salário do funcionário ${funcionario2.nome}: ${funcionario2.salario}\nPercentual a ser aumentado: `)));
funcionario3.aumentarSalario(Number(prompt(`Salário do funcionário ${funcionario3.nome}: ${funcionario3.salario}\nPercentual a ser aumentado: `)));

funcionario1.exibirInfo();
funcionario2.exibirInfo();
funcionario3.exibirInfo();