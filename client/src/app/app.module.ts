import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//imports do primeng
import {ButtonModule} from 'primeng/button';

//end imports primeng

import { Routes } from '@angular/router';
import {ClienteRoutes} from './app.routes';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

import {LoginComponent} from '../app/login/login.component';
import {UsuarioModule} from './base/usuario/usuario.module';
import { LoginGuard } from './login/login.guard';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BreadcrumbComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    UsuarioModule,
    ClienteRoutes
  ],
  providers: [
    LoginGuard,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
