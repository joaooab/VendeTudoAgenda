import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//imports do primeng
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {GrowlModule} from 'primeng/growl';
import { MessageService } from "primeng/components/common/messageservice";

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
    FormsModule,
    GrowlModule,
    UsuarioModule,
    InputTextModule,
    ClienteRoutes
  ],
  providers: [
    LoginGuard,
    MessageService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
