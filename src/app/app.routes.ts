import { Routes } from '@angular/router';
import { loginGuard } from './guards/login-guard';

export const routes: Routes = [

    {
        path: "",
        pathMatch: "full",
        loadComponent: 
        () => import("./pages/login/login").then(m => m.Login)
    },
    {
        path: "home",
        pathMatch: "full",
        canActivate: [loginGuard],
        loadComponent: 
        () => import("./pages/home/home").then(m => m.Home)
    },
    {
        path: "dashboard",
        pathMatch: "full",
        canActivate: [loginGuard],
        loadComponent: 
        () => import("./pages/dashboard/dashboard").then(m => m.Dashboard)
    },
    {
        path: "index",
        pathMatch: "full",
        loadComponent: 
        () => import("./pages/index/index").then(m => m.Index)
    },
    {
        path: "contato",
        pathMatch: "full",
        canActivate: [loginGuard],
        loadComponent: 
        () => import("./pages/contato/contato").then(m => m.Contato)
    },
    {
        path: "lancamento",
        pathMatch: "full",
        canActivate: [loginGuard],
        loadComponent: 
        () => import("./pages/lancamento/lancamento").then(m => m.Lancamento)
    },
    {
        path: "cadastro",
        pathMatch: "full",
        canActivate: [loginGuard],
        loadComponent: 
        () => import("./pages/cadastro/cadastro").then(m => m.Cadastro)
    }

];
