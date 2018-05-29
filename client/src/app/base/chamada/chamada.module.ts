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

import {CadastroChamadaComponent} from "./cadastro/cadastro-chamada.component";
import {ListagemChamadaoComponent} from "./listagem/listagem-chamada.component";
import {ChamadaService} from "./chamda.service";
import {CalendarModule} from 'primeng/calendar';



@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ButtonModule,
        InputTextModule,
        InputMaskModule,
        DropdownModule,
        TableModule,
        GrowlModule,
        CalendarModule
    ],
    declarations: [
        CadastroChamadaComponent,
        ListagemChamadaoComponent
    ],
    providers:[
        ChamadaService
    ]
})
export class ChamadaModule { }
