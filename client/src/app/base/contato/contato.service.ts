import { Injectable } from "@angular/core";
import { Servico } from "../../arquitetura/servico/servico";
import { Contato } from "../modelo/contato.model";
import { Http } from "@angular/http";

@Injectable()
export class ContatoService extends Servico<Contato>{

    constructor(http: Http){
        
        super('contatoes',http)
        
    }
}