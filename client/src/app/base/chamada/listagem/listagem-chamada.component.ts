import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Message} from 'primeng/api';
import {ChamadaService} from '../chamada.service';

@Component({
    selector: 'app-listagem-chamada',
    templateUrl: './listagem-chamada.component.html',
    styles: []
})
export class ListagemChamadaoComponent implements OnInit {
    cols: Array<any>;
    chamada: Array<any>;
    msgs: Message[] = [];
    chamadaSelecionada: any;

    constructor(private chamadaService: ChamadaService,
                private router: Router) { }

    ngOnInit() {
        this.chamadaService.listar().subscribe(result => {
           var chamadas = JSON.parse(result._body);
           this.chamada = chamadas;
        });
    }

    novo():void{
        this.router.navigate(['/cadastros/chamada/novo']);
    }

    editar():void{

    }

    excluir():void{
        this.msgs = [];
        if(!this.chamadaSelecionada){
            this.msgs.push({severity:'error', summary:'Error Message', detail:'Selecione uma chamada da lista'});
        }else{

        }
    }

    voltarTelaPrincipal(): void{
        this.router.navigate(['/principal']);
    }
}
