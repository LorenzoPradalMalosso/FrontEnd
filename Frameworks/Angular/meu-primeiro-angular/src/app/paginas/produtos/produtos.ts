import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  imports: [],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {
  // Atributos
  contador : number = 0;
  valorAtual : string = "";
  valorSalvo : string = "";
  isMouseOver : boolean = false;

  // Função sem Parâmetro
  incrementar() {
    this.contador++; // Soma + 1 toda vez que a função for executada
  }

  // Função com Parâmetro
  onKeyUp(event : any) {
    this.valorAtual = event.target.value;
  }

  // Função - Salvar Valor
  salvarValor(valor : string) {
    this.valorSalvo = valor;
  }

  // Função - Alternar
  alternarDestaque() {
    this.isMouseOver = !this.isMouseOver; // Inverte valor booleana
  }
}
