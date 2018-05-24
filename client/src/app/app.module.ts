import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import {ClienteRoutes} from './app.routes';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CadastroComponent } from './base/usuario/cadastro/cadastro.component';
import { ListagemComponent } from './base/usuario/listagem/listagem.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BreadcrumbComponent,
    CadastroComponent,
    ListagemComponent
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
