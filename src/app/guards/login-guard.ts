import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common'; // Importar isPlatformBrowser
import { PLATFORM_ID } from '@angular/core'; // Importar PLATFORM_ID

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  // Verificar se estamos no navegador
  if (isPlatformBrowser(platformId)) {
    const email = sessionStorage.getItem("email");
    if (state.url === '/cadastro') {
      return true;
    }

    if (!email) {
      alert("Usuário não está autenticado. Retorne e faça login novamente!");
      router.navigate([""]);
      return false;
    }
  } else {
    // Caso esteja no servidor (SSR), simplesmente retorna true ou redireciona
    console.log('Executando no servidor (SSR), não é possível acessar sessionStorage.');
    return true; // Ou false, dependendo da lógica
  }

  return true;
};