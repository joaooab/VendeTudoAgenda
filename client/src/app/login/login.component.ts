import { Component, Inject, OnInit } from "@angular/core";
import { LoginRequest } from "./login.request.model";
import {Message} from 'primeng/api';
import { MessageService } from "primeng/components/common/messageservice";
import { Router } from "@angular/router";
import { DOCUMENT } from '@angular/platform-browser'
import { LoginService } from "./login.service";
import { setUsuarioLogado, setIdUsuarioLogado, setFuncaoUsuarioLogado } from "../arquitetura/servico/base.service";
@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{
   
    msgs: Message[] = [];

    loginRequest : LoginRequest = new LoginRequest();

    constructor( @Inject(DOCUMENT) private document: Document,
                private messageService: MessageService,
                private router: Router,
                private loginService: LoginService){

        
    }

    logar() {

        if(!this.loginRequest.email || !this.loginRequest.senha){
            
            this.msgs = [];
            this.msgs.push({severity:'warn', summary:'Warn Message', detail:'Campos obrigatórios'});

        }
        else{
            this.loginService.logar(this.loginRequest).subscribe((usuario)=>{
            
                setUsuarioLogado(usuario.token);

                setIdUsuarioLogado(usuario.id);

                setFuncaoUsuarioLogado(usuario.funcao);
    
                this.document.body.classList.remove('back-login');
    
                this.router.navigate(['/principal']);
                
    
            },(usuarioError)=>{
    
                this.msgs = [];
                this.msgs.push({severity:'error', summary:'Error Message', detail: 'Usuário e/ou senha inválido'});
            });
        }
        
        
    }

    esqueciSenha(){
        console.log("esqueci senha");
    }

    ngOnInit(): void {
        this.document.body.classList.add('back-login');
    }

}