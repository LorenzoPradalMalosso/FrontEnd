const prompt = require("prompt-sync")()

class ContaBancaria {
  titular;
  saldo;

  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor) {
    return this.saldo += valor;
  }

  sacar(valor) {
    if (valor > this.saldo) {
        console.log("Saldo insuficiente!");
    } else {
        this.saldo -= valor;
    }
  }

  exibirSaldo() {
    console.log(`\nTitular: ${this.titular} | Saldo atual: ${this.saldo}`);
  }
}

let conta1 = new ContaBancaria("Kaio", 676767);
let conta2 = new ContaBancaria("Lorenzo", 999999);
let conta3 = new ContaBancaria("Murilo", 676767);

conta1.depositar(Number(prompt(`Saldo do titular ${conta1.titular}: ${conta1.saldo}\nValor a ser depositado: `)));
conta2.sacar(Number(prompt(`Saldo do titular ${conta2.titular}: ${conta2.saldo}\nValor a ser sacado: `)));

conta1.exibirSaldo();
conta2.exibirSaldo();
conta3.exibirSaldo();