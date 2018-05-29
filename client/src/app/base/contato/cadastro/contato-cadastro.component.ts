import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Contato } from "../../modelo/contato.model";
import { SelectItem } from "primeng/api";
import {Message} from 'primeng/api';
import { MessageService } from "primeng/components/common/messageservice";

@Component({
    templateUrl: './contato-cadastro.component.html'
})
export class ContatoCadastroComponent implements OnInit{
    
    pessoa : SelectItem[];
    option : string = 'Selecione';

    msgs: Message[] = [];

    private valorCpfOuCnpj : number[];
    private checked:boolean = false;
    
    private contato: Contato = new Contato();

    constructor(private router:Router,
                ){
        
        this.pessoa = [
            {label:'Selecione', value:''},
            {label: 'Física', value: 'Física'},
            {label: 'Juridica', value: 'Juridica'}
        ];
    }

    ngOnInit(){
        
    }
    

    salvar(){

        
        if(!this.contato.nome|| !this.contato.cpf || !this.contato.dataNascimento || !this.contato.endereco || !this.contato.celular ){
            this.msgs = [];
            this.msgs.push({severity:'error', summary:'Warn Message', detail:'Campos obrigatórios não preenchidos'});

        }
    
    
        if(!this.contato.nome || !this.contato.cnpj || !this.contato.dataNascimento || !this.contato.endereco || !this.contato.celular ){
            this.msgs = [];
            this.msgs.push({severity:'error', summary:'Warn Message', detail:'Campos obrigatórios não preenchidos'});
        }
        
        
        if(this.checked){
            this.contato.autorizaEmail = true;
        }else{
            this.contato.autorizaEmail = false;
        }
    }
    voltar(){
        this.router.navigate(['/principal'])
    }
}