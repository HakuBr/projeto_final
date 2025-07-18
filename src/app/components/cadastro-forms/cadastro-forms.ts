import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-forms',
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro-forms.html',
  styleUrl: './cadastro-forms.css'
})

export class CadastroForms {
  formData = {
    nome: '',
    email: '',
    senha: ''
  };

  router = inject(Router)
  termosAceitos: boolean = false;

  onSubmit(form: any) {
    if (form.valid && this.termosAceitos) {
      console.log('Dados enviados:', this.formData);
      alert('Cadastro realizado com sucesso!');
      this.router.navigate([""])
    } else {
      alert('Preencha todos os campos e aceite os termos.');
    }
  }
}
