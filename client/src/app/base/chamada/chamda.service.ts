import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import {BaseService} from '../../arquitetura/servico/base.service';
import {Chamada} from '../modelo/Chamada.model';

@Injectable()
export class ChamadaService extends BaseService {

    constructor(private http: Http){
        super()
    }

    listar() : Observable<any>{
        return this.http.get(`${environment.baseUrl}/chamadas`, this.config());
    }

    listarContatos(): Observable<any>{
        return this.http.get(`${environment.baseUrl}/contatoes`, this.config());
    }

    excluir(id: number): Observable<any> {
        return this.http.delete(`${environment.baseUrl}/contatoes/`+id, this.config());
    }

    salvar(chamada: Chamada): Observable<any>{

        let body = JSON.stringify({chamada:{
            nome: chamada.nome,
            data: chamada.data.getDate(),
            duracao: chamada.duracao,
            descricao: chamada.descricao
        }});

        return this.http.post(`${environment.baseUrl}/chamadas`, body, this.config());
    }
}
