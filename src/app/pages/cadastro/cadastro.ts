import { Component, inject } from '@angular/core';
import { CadastroForms } from '../../components/cadastro-forms/cadastro-forms';
import { Menu } from "../../components/menu/menu";
import { Router } from '@angular/router';
import { Copy } from "../../components/copy/copy";

@Component({
  selector: 'app-cadastro',
  imports: [CadastroForms],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {
  router = inject(Router)

  logout() {
    sessionStorage.clear()
    this.router.navigate([""])
  }
}
