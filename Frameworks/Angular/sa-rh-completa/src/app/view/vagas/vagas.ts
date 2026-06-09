import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../../service/apiservice';
import { Vaga } from '../../model/vaga.model';

@Component({
  selector: 'app-vagas',
  imports: [],
  templateUrl: './vagas.html',
  styleUrl: './vagas.scss',
})
export class Vagas implements OnInit {
  // Atributos
  // Vetor para receber todas as vagas da api
  public vagas: Vaga[] = [];

  constructor(private _apiService: Apiservice) {} // Ao abrir a página, estabele conexão com api

  // Método para conectar com API

  listarVagas(): void {
    // Preencher o vetor comas informações da API
    this._apiService.getVagas().subscribe(
      // Subscribe => Ferramenta do Observable para fazer conexão Assincrona
      // Mapeamento de Dados
      (resposta) => {
        // Convertendo a Respostas da API em Obj para o Vetor
        this.vagas = resposta.map((e) => new Vaga(e.id, e.nome, e.foto, e.descricao, e.salario));
      },
    );
  }

  // Método para carregamento ao inicar a tela
  ngOnInit(): void {
    this.listarVagas();
  }
}
