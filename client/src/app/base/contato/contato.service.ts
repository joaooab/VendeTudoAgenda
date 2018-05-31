import {Injectable} from '@angular/core';
import {Servico} from '../../arquitetura/servico/servico';
import {Contato} from '../modelo/contato.model';
import {Http} from '@angular/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class ContatoService extends Servico<Contato>{

    constructor(http: Http){
        
        super('contatoes',http)
        
    }

    gerarRelatorio(){
        return this.http.get(`${environment.baseUrl}/gerarRelatorio`, this.config());
    }
}