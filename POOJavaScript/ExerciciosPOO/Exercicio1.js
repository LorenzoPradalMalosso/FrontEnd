const prompt = require("prompt-sync")();

class Produto {
  nome;
  preco;
  estoque;

  constructor(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }

  vender(quantidade) {
    if (quantidade > this.estoque) {
      console.log("Estoque insuficiente.");
    } else {
      this.estoque -= quantidade;
    }
  }

  repor(quantidade) {
    return (this.estoque += quantidade);
  }

  exibirInfo() {
    console.log(
      `Nome: ${this.nome} | Preço: R$${this.preco} | Estoque: ${this.estoque} produtos.`,
    );
  }
}

let produto1 = new Produto("Mouse Gamer RGB", 89.9, 15);
let produto2 = new Produto("Teclado Mecânico LED", 199.9, 8);
let produto3 = new Produto("Headset Gamer Pro", 149.9, 12);

produto1.vender(
  Number(prompt(
    `\nQuantidade do produto ${produto1.nome} no estoque: ${produto1.estoque}.\nQuantidade vendida: `,
  ),
));
produto2.repor(
  Number(prompt(
    `\nQuantidade do produto ${produto2.nome} no estoque: ${produto2.estoque}.\nQuantidade reposta: `,
  ),
));
produto3.repor(
  Number(prompt(
    `\nQuantidade do produto ${produto3.nome} no estoque: ${produto3.estoque}.\nQuantidade reposta: `,
  ),
));

console.log("\nEstoque atualizado:");
produto1.exibirInfo();
produto2.exibirInfo();
produto3.exibirInfo();