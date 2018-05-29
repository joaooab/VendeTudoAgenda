import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {Message} from 'primeng/api';

import { Usuario } from '../../modelo/usuario.model';
import {ChamadaService} from "../chamda.service";

@Component({
    selector: 'app-listagem-chamada',
    templateUrl: './listagem-chamada.component.html',
    styles: []
})
export class ListagemChamadaoComponent implements OnInit {
    cols: Array<any>;
    chamada: Array<any>;
    selectedChamada: Usuario;
    msgs: Message[] = [];

    constructor(private chamadaService: ChamadaService,
                private router: Router) { }

    ngOnInit() {
        this.chamada = [
            {nome:'Chamada 1',date: '20-05-2018',duracao:'02:22:00',descricao:'descricao descricao descricao descriacao descricao'},
            {nome:'Chamada 2',date: '21-05-2018',duracao:'04:22:00',descricao:'descricao descricao descricao descriacao descricao'},
            {nome:'Chamada 3',date: '23-05-2018',duracao:'03:22:00',descricao:'descricao descricao descricao descriacao descricao'},
        ];

        this.cols = [
            {field: 'nome',header:'Nome'},
            {field: 'date', header:'Data'},
            {field: 'duracao', header:'Duracao'},
            {field:'descricao',header:'Descricao'}
        ]
    }

    novo():void{
        this.router.navigate(['/cadastros/chamada/novo']);
    }

    editar():void{

    }



    excluir():void{
        console.log(this.selectedChamada);
        this.msgs = [];
        if(!this.selectedChamada){
            this.msgs.push({severity:'error', summary:'Error Message', detail:'Selecione uma chamada d� lista'});
        }
    }

    voltarTelaPrincipal(): void{
        this.router.navigate(['/principal']);
    }
}
