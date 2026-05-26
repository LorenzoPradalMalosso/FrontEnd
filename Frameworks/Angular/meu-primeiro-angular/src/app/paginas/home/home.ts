import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // Declarar um atributo
  nome : string = "Maria";
  // Interpolação {{}} (Unidirecional = TS -> HTML)

  imgUrl : string = "https://imgs.search.brave.com/gKd9xNeWxkh52T5iuT2p-BP77XY2PbvHmNtnx-yKw2U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b2xpbXBpYWRhdG9k/b2RpYS5jb20uYnIv/d3AtY29udGVudC91/cGxvYWRzLzIwMjYv/MDQvaHVnby1jYWxk/ZXJhbm8tY29wYS1k/by1tdW5kby0yLnBu/Zw";
  // property binding [] (Unidirecional = TS -> HTML)

  botaoStatus : boolean = false;
  // property binding []

  // Style e Class Binding =: Alteração de Classe e Style via Data Binding
  classeAlerta : string = "alert-success";
}
