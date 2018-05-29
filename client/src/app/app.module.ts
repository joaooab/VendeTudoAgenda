import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


//imports do primeng
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {GrowlModule} from 'primeng/growl';
import { MessageService } from "primeng/components/common/messageservice";

//end imports primeng

import { Routes } from '@angular/router';
import {ClienteRoutes} from './app.routes';

import { AppComponent } from './app.component';

import {LoginComponent} from '../app/login/login.component';
import {UsuarioModule} from './base/usuario/usuario.module';
import {ContatoModule} from './base/contato/contato.module';
import {ChamadaModule} from './base/chamada/chamada.module';
import {CategoriaModule} from './base/categoria/categoria.module';
import {HomeModule} from './base/home/home.module';
import {LoginGuard} from './login/login.guard';
import {LoginService} from './login/login.service';
import {LogoutService} from './login/logout.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ButtonModule,
    GrowlModule,
    UsuarioModule,
    ContatoModule,
    HomeModule,
    InputTextModule,
    ClienteRoutes,
    ChamadaModule,
    CategoriaModule
    
  ],
  providers: [
    LoginGuard,
    MessageService,
    LoginService,
    LogoutService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
