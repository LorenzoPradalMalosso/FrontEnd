import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Header } from './view/fragmentos/header/header';
import { Footer } from './view/fragmentos/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sa-rh-completa');
}
