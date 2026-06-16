import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Curriculo } from '../../../model/curriculo.model';
import { CurriculoService } from '../../../service/curriculo.service';

@Component({
  selector: 'app-curriculo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './curriculo-form.html',
  styleUrls: ['./curriculo-form.scss'],
})
export class CurriculoForm {
  public curriculo: Curriculo = this.createEmptyCurriculo();
  public updateMode = false;
  public updateMessage = '';

  constructor(private curriculoService: CurriculoService) {}

  private createEmptyCurriculo(): Curriculo {
    return new Curriculo(
      0,
      0,
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      [
        {
          curso: '',
          instituicao: '',
          nivel: '',
          anoConclusao: 0,
        },
      ],
      [
        {
          empresa: '',
          cargo: '',
          descricao: '',
          dataInicio: '',
          dataFim: '',
        },
      ],
      [''],
      [''],
      '',
      '',
    );
  }

  cadastrarCurriculo(form: NgForm): void {
    if (!form.valid) {
      form.control.markAllAsTouched();
      return;
    }

    this.curriculoService.postCurriculo(this.curriculo).subscribe(
      (result) => {
        alert('Currículo cadastrado com sucesso!');
        if (result && result.id) {
          this.curriculo.id = result.id;
        }
        localStorage.setItem('ultimoCurriculoCadastrado', JSON.stringify(result));
        this.curriculo = this.createEmptyCurriculo();
        form.resetForm(this.curriculo);
        window.location.href = '/curriculo-list';
      },
      (error) => {
        console.error('Erro ao cadastrar currículo:', error);
        alert('Falha ao cadastrar currículo. Verifique o console.');
      },
    );
  }

  iniciarAtualizacao(): void {
    this.updateMode = true;
    this.curriculo = this.createEmptyCurriculo();
    this.updateMessage = 'Digite o ID do currículo e clique em Carregar currículo para preencher os campos.';
  }

  private createCurriculoFromMap(map: any): Curriculo {
    return new Curriculo(
      map.id,
      map.usuarioId,
      map.nomeCompleto,
      map.email,
      map.telefone,
      map.cidade,
      map.estado,
      map.cargoDesejado,
      map.resumoProfissional,
      map.formacoes || [],
      map.experiencias || [],
      map.habilidades || [],
      map.idiomas || [],
      map.linkedin || '',
      map.github || '',
    );
  }

  carregarCurriculo(form: NgForm): void {
    if (!this.curriculo.id || this.curriculo.id <= 0) {
      alert('Informe o ID válido do currículo para carregar.');
      return;
    }

    this.curriculoService.getCurriculoById(this.curriculo.id).subscribe(
      (result) => {
        this.curriculo = this.createCurriculoFromMap(result);
        form.resetForm(this.curriculo);
        this.updateMessage = 'Currículo carregado. Ajuste os dados e clique em Confirmar atualização.';
        alert('Currículo carregado com sucesso!');
      },
      (error) => {
        console.error('Erro ao carregar currículo:', error);
        alert('Não foi possível carregar o currículo. Verifique o ID e tente novamente.');
      },
    );
  }

  confirmarAtualizacao(form: NgForm): void {
    if (!this.curriculo.id || this.curriculo.id <= 0) {
      alert('Informe o ID do currículo para atualizar.');
      return;
    }

    if (!form.valid) {
      form.control.markAllAsTouched();
      return;
    }

    this.curriculoService.putCurriculo(this.curriculo).subscribe(
      () => {
        alert('Currículo atualizado com sucesso!');
        this.updateMode = false;
        this.updateMessage = '';
        this.curriculo = this.createEmptyCurriculo();
        form.resetForm(this.curriculo);
        window.location.href = '/curriculo-list';
      },
      (error) => {
        console.error('Erro ao atualizar currículo:', error);
        alert('Falha ao atualizar currículo. Verifique o console.');
      },
    );
  }

  limparFormulario(): void {
    this.curriculo = this.createEmptyCurriculo();
    this.updateMode = false;
    this.updateMessage = '';
  }

  adicionarFormacao(): void {
    this.curriculo.formacoes.push({
      curso: '',
      instituicao: '',
      nivel: '',
      anoConclusao: 0,
    });
  }

  removerFormacao(index: number): void {
    if (this.curriculo.formacoes.length > 1) {
      this.curriculo.formacoes.splice(index, 1);
    }
  }

  adicionarExperiencia(): void {
    this.curriculo.experiencias.push({
      empresa: '',
      cargo: '',
      descricao: '',
      dataInicio: '',
      dataFim: '',
    });
  }

  removerExperiencia(index: number): void {
    if (this.curriculo.experiencias.length > 1) {
      this.curriculo.experiencias.splice(index, 1);
    }
  }

  adicionarHabilidade(): void {
    this.curriculo.habilidades.push('');
  }

  removerHabilidade(index: number): void {
    if (this.curriculo.habilidades.length > 1) {
      this.curriculo.habilidades.splice(index, 1);
    }
  }

  adicionarIdioma(): void {
    this.curriculo.idiomas.push('');
  }

  removerIdioma(index: number): void {
    if (this.curriculo.idiomas.length > 1) {
      this.curriculo.idiomas.splice(index, 1);
    }
  }

  trackByIndex(index: number, _item: any): number {
    return index;
  }
}
