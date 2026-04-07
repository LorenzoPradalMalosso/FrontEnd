class Veiculo {
  marca;
  modelo;
  ano;

  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  exibirInfo() {
    console.log(
      `\nMarca: ${this.marca} | Modelo: ${this.modelo} | Ano: ${this.ano}`,
    );
  }
}

let veiculo1 = new Veiculo("Toyota", "Corolla", 2020);
let veiculo2 = new Veiculo("Honda", "Civic", 2022);
let veiculo3 = new Veiculo("Ford", "Ka", 2019);

veiculo1.exibirInfo();
veiculo2.exibirInfo();
veiculo3.exibirInfo();

class Carro extends Veiculo {
  quantidadePortas;

  constructor(marca, modelo, ano, quantidadePortas) {
    super(marca, modelo, ano);
    this.quantidadePortas = quantidadePortas;
  }

  exibirInfo() {
    super.exibirInfo();
    console.log(`Quantidade de Portas: ${this.quantidadePortas}`);
  }
}

let carro1 = new Carro("Chevrolet", "Onix", 2021, 4);
carro1.exibirInfo();