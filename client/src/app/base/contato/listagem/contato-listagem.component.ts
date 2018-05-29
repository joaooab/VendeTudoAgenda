import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Contato } from "../../modelo/contato.model";
import { Servico } from "../../../arquitetura/servico/servico";
import { ContatoService } from "../contato.service";
import {Message} from 'primeng/api';
import { MessageService } from "primeng/components/common/messageservice";
import { Usuario } from "../../modelo/usuario.model";
import { getUsuarioLogado } from "../../../arquitetura/servico/base.service";
import { RespostaRequisicao } from "../../../arquitetura/servico/requisicao";




@Component({
    templateUrl: './contato-listagem.component.html'
})
export class ContatoListagemComponent implements OnInit{
   
   
    private contato: Contato[];
    selectedContato: Contato;

    msgs: Message[] = [];

    constructor(
                protected service: ContatoService,
                private router:Router){
        
        
       
    }

    ngOnInit(): void {
        
        this.service.listar().subscribe((res:RespostaRequisicao<Contato>)=>
        {
           console.log(res);
            this.contato = res._embedded['contatoes'];

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
        
    }

}


