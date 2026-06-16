import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Curriculo } from '../../../model/curriculo.model';
import { CurriculoService } from '../../../service/curriculo.service';

@Component({
  selector: 'app-curriculo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curriculo-list.html',
  styleUrls: ['./curriculo-list.scss'],
})
export class CurriculoList implements OnInit {
  public curriculos: Curriculo[] = [];
  public selectedCurriculo: Curriculo | null = null;
  public mensagemErro = '';

  constructor(
    private curriculoService: CurriculoService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.carregarUltimoCurriculoCadastrado();
    const curriculosDaRota = this.route.snapshot.data['curriculos'] || [];
    if (curriculosDaRota.length > 0) {
      this.curriculos = this.mapearCurriculos(curriculosDaRota);
    }
    this.listarCurriculos();
  }

  listarCurriculos(): void {
    this.curriculoService.getCurriculos().subscribe(
      (resposta) => {
        this.mensagemErro = '';
        this.curriculos = this.mapearCurriculos(resposta);
        if (this.temLocalStorage()) {
          localStorage.removeItem('ultimoCurriculoCadastrado');
        }
      },
      (error) => {
        console.error('Erro ao listar currículos:', error);
        this.mensagemErro = 'Não foi possível carregar os currículos da API.';
      },
    );
  }

  private carregarUltimoCurriculoCadastrado(): void {
    if (!this.temLocalStorage()) {
      return;
    }

    const ultimoCurriculo = localStorage.getItem('ultimoCurriculoCadastrado');

    if (ultimoCurriculo) {
      this.curriculos = this.mapearCurriculos([JSON.parse(ultimoCurriculo)]);
    }
  }

  private temLocalStorage(): boolean {
    return typeof localStorage !== 'undefined';
  }

  private mapearCurriculos(curriculos: any[]): Curriculo[] {
    return curriculos.map(
      (e) =>
        new Curriculo(
          e.id,
          e.usuarioId,
          e.nomeCompleto,
          e.email,
          e.telefone,
          e.cidade,
          e.estado,
          e.cargoDesejado,
          e.resumoProfissional,
          e.formacoes || [],
          e.experiencias || [],
          e.habilidades || [],
          e.idiomas || [],
          e.linkedin || '',
          e.github || '',
        ),
    );
  }

  selecionarCurriculo(curriculo: Curriculo): void {
    this.selectedCurriculo = curriculo;
  }

  excluirCurriculo(id: number): void {
    this.curriculoService.deleteCurriculo(id).subscribe(
      () => {
        alert('Currículo excluído com sucesso!');
        this.listarCurriculos();
        if (this.selectedCurriculo?.id === id) {
          this.selectedCurriculo = null;
        }
      },
      (error) => {
        console.error('Erro ao excluir currículo:', error);
        alert('Falha ao excluir currículo. Verifique o console.');
      },
    );
  }
}
