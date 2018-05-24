import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUsuarioComponent } from './cadastro/cadastro-usuario.component';
import { ListagemUsuarioComponent } from './listagem/listagem-usuario.component';
import { UsuarioService } from './usuario.service';


@NgModule({
  imports: [
  ],
  declarations: [
    CadastroUsuarioComponent,
    ListagemUsuarioComponent
  ],
  providers:[
    UsuarioService
  ]
})
export class UsuarioModule { }
