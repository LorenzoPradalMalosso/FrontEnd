import { Routes } from '@angular/router';
import { Home } from './view/home/home';
import { Vagas } from './view/vagas/vagas';

export const routes: Routes = [
  {path: "", component: Home},
  {path: "vagas", component: Vagas}
];
