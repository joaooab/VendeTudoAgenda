import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//prime ng
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {GrowlModule} from 'primeng/growl';
import {InputTextModule} from 'primeng/inputtext';
//fim prime ng

import {CategoriaService} from './categoria.service';
import { ListagemCategoriaComponent } from './listagem/listagem-categoria.component';
import { CadastroCategoriaComponent } from './cadastro/cadastro-categoria.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    GrowlModule,
    ButtonModule,
    InputTextModule
  ],
  declarations: [
    CadastroCategoriaComponent,
    ListagemCategoriaComponent
  ],
  providers:[
    CategoriaService
  ]
})
export class CategoriaModule { }
