import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Container } from './components/container/container';
import { Footer } from './components/footer/footer';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Container, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-static-template');
}
