import { Aside } from '../aside/aside';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aside-container',
  imports: [Aside],
  templateUrl: './aside-container.html',
  styleUrl: './aside-container.scss',
})
export class AsideContainer {}
