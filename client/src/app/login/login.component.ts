import { Component } from "@angular/core";
import { LoginRequest } from "./login.request.model";
import {Message} from 'primeng/api';
import { MessageService } from "primeng/components/common/messageservice";
import { Router } from "@angular/router";

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    msgs: Message[] = [];
    loginRequest : LoginRequest = new LoginRequest();

    constructor(private messageService: MessageService,
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
            
        
    }


}