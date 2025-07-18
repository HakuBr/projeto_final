import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { NgModule } from '@angular/core';
import { Menu } from "../../components/menu/menu";
import { Router } from '@angular/router';
import { Copy } from "../../components/copy/copy";

@Component({
  selector: 'app-contato',
  imports: [Menu],
  templateUrl: './contato.html',
  styleUrl: './contato.css'
})
export class Contato {
  formData = {
    nome: '',
    email: '',
    cpf: '',
    sobrenome: '',
    telefone: '',
    contato: '',
    mensagem: '',
    termos: false,
    receberDescontos: false
  };

  router = inject(Router)

  logout() {
    sessionStorage.clear()
    this.router.navigate([""])
  }
  

  constructor() { }

  onSubmit() {
    console.log('Formulário enviado', this.formData);

    // Aqui você pode adicionar a lógica para enviar os dados do formulário,
    // como uma chamada de API ou validações adicionais.
  }
}
