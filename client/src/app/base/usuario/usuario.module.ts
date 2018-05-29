import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//import prime ng
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import {GrowlModule} from 'primeng/growl';

//end prime ng

import { CadastroUsuarioComponent } from './cadastro/cadastro-usuario.component';
import { ListagemUsuarioComponent } from './listagem/listagem-usuario.component';
import { UsuarioService } from './usuario.service';



@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    DropdownModule,
    TableModule,
    GrowlModule
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
