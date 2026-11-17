import { Component, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    NgOptimizedImage,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../app.component.scss'],
})
export class HomeComponent implements OnInit {
  public welcomeMessage = signal('');
  public welcomeLogo = signal('');

  constructor() {}

  ngOnInit(): void {
    this.welcomeMessage.set("Bienvenue sur ton tableau de bord d'e-sport !");
    this.welcomeLogo.set('src/images/favicon.ico');
  }
}
