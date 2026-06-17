import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Main } from '../main/main';

@Component({
  selector: 'app-container',
  imports: [Navbar, Main],
  templateUrl: './container.html',
  styleUrl: './container.scss',
})
export class Container {}
