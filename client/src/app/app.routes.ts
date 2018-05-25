import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './login/login.guard';

import { ModuleWithProviders } from '@angular/compiler/src/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CadastroUsuarioComponent } from './base/usuario/cadastro/cadastro-usuario.component'

import {UsuarioRoute} from '../app/base/usuario/usuario.route';
import {LoginComponent} from './login/login.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

export const routes: Routes = [
    {
        canActivate: [LoginGuard],
        path: '', children: [
            {path: '', component: DashboardComponent},
            ...UsuarioRoute,
        ]
    },

    {path: 'login', component: LoginComponent},
    {path: 'principal', component: BreadcrumbComponent}
    
];

export const ClienteRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {useHash:true});