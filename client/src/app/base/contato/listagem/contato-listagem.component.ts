import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Contato } from "../../modelo/contato.model";
import { Servico } from "../../../arquitetura/servico/servico";
import { ContatoService } from "../contato.service";
import {Message, ConfirmationService} from 'primeng/api';
import { MessageService } from "primeng/components/common/messageservice";
import { Usuario } from "../../modelo/usuario.model";
import { getUsuarioLogado } from "../../../arquitetura/servico/base.service";
import { RespostaRequisicao } from "../../../arquitetura/servico/requisicao";
import { CategoriaService } from "../../categoria/categoria.service";




@Component({
    templateUrl: './contato-listagem.component.html'
})
export class ContatoListagemComponent implements OnInit{
   
   
    private contato: Contato[];
    selectedContato: Contato;

    msgs: Message[] = [];

    constructor(
                protected service: ContatoService,
                private categoriaService:CategoriaService,
                private router:Router,
                private confirmationService:ConfirmationService){
        
        
       
    }

    ngOnInit(): void {
        
        this.service.listar().subscribe((res)=>
        {

            this.contato = res;

        })

        

    }

    voltarTelaPrincipal(): void{
        this.router.navigate(['/principal']);
    }

    editar(){
        this.msgs = [];
        if(!this.selectedContato){
            this.msgs.push({severity:'error', summary:'Error Message', detail:'Selecione um contato da lista'});
        }
        
        this.router.navigate(['cadastros/contato/edicao/' + this.selectedContato.id]);
    }

    excluir(){
        this.msgs = [];
        if(!this.selectedContato){
            this.msgs.push({severity:'error', summary:'Error Message', detail:'Selecione um contato da lista'});
        }else{
            this.confirmationService.confirm({
                message: 'Deseja realmente excluir este contato ?',
                header: 'Delete Confirmation',
                icon: 'fa fa-trash',
                accept: () => {
                    this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
                },
                reject: () => {
                    this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
                }
            });
        }
        
    }

}


