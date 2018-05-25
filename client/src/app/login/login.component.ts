import { Component, Inject, OnInit } from "@angular/core";
import { LoginRequest } from "./login.request.model";
import {Message} from 'primeng/api';
import { MessageService } from "primeng/components/common/messageservice";
import { Router } from "@angular/router";
import { DOCUMENT } from '@angular/platform-browser'
@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{
   
    msgs: Message[] = [];
    loginRequest : LoginRequest = new LoginRequest();

    constructor( @Inject(DOCUMENT) private document: Document,
                private messageService: MessageService,
                private router: Router){

    }

    logar(event?) {

        if(!this.loginRequest.usuario || !this.loginRequest.senha){
            
            this.msgs = [];
            this.msgs.push({severity:'warn', summary:'Warn Message', detail:'Campos obrigatórios'});

        }else if(this.loginRequest.usuario == 'admin' && this.loginRequest.senha == "admin"){
            this.router.navigate(['/principal']);
        }else{
            this.msgs = [];
            this.msgs.push({severity:'error', summary:'Error Message', detail:'Usuário e/ou Senha incorretos'});
        }
            
        this.document.body.classList.remove('back-login');
    }

    ngOnInit(): void {
        this.document.body.classList.add('back-login');
    }

}