import { Component, OnInit, Inject, ViewChild } from "@angular/core";
import { Usuario } from "../modelo/usuario.model";
import { Router } from "@angular/router";
import { DOCUMENT } from "@angular/platform-browser";
import { LogoutService } from "../../login/logout.service";
import { SelectItem } from "primeng/api";
import { ContatoService } from "../contato/contato.service";




@Component({
    templateUrl:'./home.component.html'
})
export class HomeComponent implements OnInit{
 
    display: boolean = false;
    tipo: SelectItem[];
    option: string = 'Selecione';

    constructor(private router: Router,
                @Inject(DOCUMENT) private document: Document,
                private logoutService: LogoutService,
                private contatoService:ContatoService){


        this.document.body.classList.add('back-login');
        this.tipo = [
            {label: 'Selecione', value:''},
            {label: 'CPF', value:'CPF'},
            {label: 'CNPJ', value:'CNPJ'},
            {label: 'NOME', value:'NOME'},
            {label: 'RAZÃO SOCIAL', value:'RAZAO-SOCIAL'}

        ]
    }
    ngOnInit(){
        
        
    }
    
    showDialog() {
        this.display = true;
    }

    sair(){
        this.logoutService.logout();
    }

    alterarBack(){
        this.document.body.classList.remove('back-login');
    }

    buscar(){
        if(this.option == 'CPF'){
            console.log('cpf')
        }
        if(this.option == 'CNPJ'){
            console.log('cnpj')
        }
        if(this.option == 'NOME'){
            console.log('nome')
        }
        if(this.option == 'RAZAO-SOCIAL'){
            console.log('razao')
        }
    }
}