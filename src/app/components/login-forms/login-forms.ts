import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginS } from '../../services/login';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-forms',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-forms.html',
  styleUrl: './login-forms.css'
})
export class LoginForms {

  loginService = inject(LoginS)
  router = inject(Router)

  loginForm = new FormGroup({
    nome: new FormControl("", [Validators.required]),
    senha: new FormControl("", [Validators.required])
  })

  loginJp(){
    const { nome, senha } = this.loginForm.value

    if(!this.loginForm.valid || !nome || !senha){
      alert("Campos vazios")
      return
    }

    this.loginService.login(nome, senha).subscribe({
        
        error: (e) => {
        alert(e.status + " " + e.message)
        if(e.status === 401){
          alert("Usuário ou senha incorretos")
          return
        }
      },
      next: () => {
        this.router.navigate(["/home"])
      }
    })
  }
  navigateToCadastro() {
    this.router.navigate(['/cadastro']);
  }
  get nome() {
    return this.loginForm.get('nome');
  }
  get senha() {
    return this.loginForm.get('senha');
  }
}
