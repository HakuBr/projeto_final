import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {

  //router = inject(Router)
  

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  // Método para verificar se a rota atual é a ativa
  isActive(route: string): boolean {
    return this.router.url === route;
  }

}
