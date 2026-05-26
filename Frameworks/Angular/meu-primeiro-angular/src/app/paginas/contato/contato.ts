import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  imports: [FormsModule],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})

export class Contato {
  nome: string = "";
  email: string = "";
  mensagem: string = "";
  dadosSalvos: string = "";

  salvarDados() {
    if (!this.nome && !this.email && !this.mensagem) {
      return;
    }

    this.dadosSalvos = `Nome: ${this.nome} - Email: ${this.email} - Mensagem: ${this.mensagem}`;

    this.nome = "";
    this.email = "";
    this.mensagem = "";
  }
}
