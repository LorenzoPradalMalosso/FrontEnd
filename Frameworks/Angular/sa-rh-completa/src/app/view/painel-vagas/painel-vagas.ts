import { Component } from '@angular/core';
import { Vaga } from '../../model/vaga.model';
import { Apiservice } from '../../service/apiservice';

@Component({
  selector: 'app-painel-vagas',
  imports: [],
  templateUrl: './painel-vagas.html',
  styleUrl: './painel-vagas.scss',
})
export class PainelVagas {
  // Terminar de fazer o CRUD
  public vagas: Vaga[] = []; // Carregar as info da API
  // Objeto para Interpolação do Formulário
  public vaga: Vaga = new Vaga(0, "", "", "", 0);

  constructor(private _apiService: Apiservice) {} // Estabelece conexão quando a página é carregada

  rgOnInit(): void {}

  // Métodos READ (Listar todas as Vagas)
  listarVagas(): void {
    // Preencher o vetor com as informações da API
    this._apiService.getVagas().subscribe( // subscribe => Ferramenta do Observable para fazer conexão Assíncrona
      // Mapeamento de Dados
      (resposta) => { // Convertendo a resposta da API em OBJ para o Vetor
        this.vagas = resposta.map((e) => new Vaga(e.id, e.nome, e.foto, e.descricao, e.salario));
      },
    );
  }

  // Listar Vaga Única (get)
  listarVagaUnica(vaga : Vaga) {
    this.vaga = vaga;
  }

  // Criar
  cadastrarVaga(): void {
    this._apiService.postVaga(this.vaga).subscribe(
      // Fazer a conexão de forma assíncrona
      // Limpar os campos do formulário
      () => {
        this.vaga = new Vaga(0, "", "", "", 0);
        this.listarVagas(); // Atualiza a lista de vagas
        alert("Vaga cadastrada com sucesso!");
      }
    );
  }

  // Atualizar
  atualizarVaga(id:any): void {
    this._apiService.putVaga(id, this.vaga).subscribe(
      () => {
        this.vaga = new Vaga(0, '', '', '', 0);
        this.listarVagas(); // Atualiza a lista de vagas
        alert('Vaga atualizada com sucesso!');
      }
    );
  }

  // Deletar
  excluirVaga(id:any): void {
    this._apiService.deleteVaga(id).subscribe(
      () => {
        this.vaga = new Vaga(0, '', '', '', 0);
        this.listarVagas(); // Atualiza a lista de vagas
        alert('Vaga excluída com sucesso!');
      }
    );
  }
}
