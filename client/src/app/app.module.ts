import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import {ClienteRoutes} from './app.routes';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CadastroUsuarioComponent } from './base/usuario/cadastro/cadastro-usuario.component';
import { ListagemUsuarioComponent } from './base/usuario/listagem/listagem-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BreadcrumbComponent,
    CadastroUsuarioComponent,
    ListagemUsuarioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ClienteRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
