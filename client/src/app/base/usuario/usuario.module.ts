import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { UsuarioService } from './usuario.service';


@NgModule({
  imports: [
  ],
  declarations: [
    CadastroComponent,
    ListagemComponent
  ],
  providers:[
    UsuarioService
  ]
})
export class UsuarioModule { }
