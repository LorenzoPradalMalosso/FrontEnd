import { inject } from '@angular/core';
import { ResolveFn, Routes } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Home } from './view/home/home';
import { Vagas } from './view/vagas/vagas';
import { PainelVagas } from './view/painel-vagas/painel-vagas';
import { CurriculoForm } from './view/curriculo/curriculo-form/curriculo-form';
import { CurriculoList } from './view/curriculo/curriculo-list/curriculo-list';
import { Curriculo } from './model/curriculo.model';
import { CurriculoService } from './service/curriculo.service';

const curriculosResolver: ResolveFn<Curriculo[]> = () =>
  inject(CurriculoService).getCurriculos().pipe(catchError(() => of([])));

export const routes: Routes = [
  {path: "", component: Home},
  {path: "vagas", component: Vagas},
  {path: "painel-vagas", component: PainelVagas},
  {path: "curriculo-form", component: CurriculoForm},
  {
    path: "curriculo-list",
    component: CurriculoList,
    resolve: { curriculos: curriculosResolver },
    runGuardsAndResolvers: "always",
  }
];
