import { BaseService } from "./base.service";
import { Entidade } from '../modelo/entidade.model';
import { Http } from "@angular/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

export abstract class Servico<E extends Entidade> extends BaseService {

    constructor(
        protected path: string,
        protected http: Http){
        
        super();
    }

    protected url(path: string){
        //return `${environment.api}/${this.path}/${path}` usando o token 
       
        return `${environment.baseUrl}/${this.path}/${path}`

    }

    listar() : Observable< E[] > {
        
        return this.http.get(this.path, this.config())
        .map(this.mapper)
    }

    get(id: number): Observable<E> {
        return this.http.get(this.url(`${id}`), this.config() )
        .map(this.mapper)
    }

    salvar(entidade: E): Observable<string>{
        return this.http.post(`${environment.baseUrl}/${this.path}`, entidade, this.config())
        .map(this.mapper)
    }

    alterar(entidade: E): Observable<string>{

        return this.http.put(`${environment.baseUrl}/${this.path}`, entidade, this.config())
        .map(this.mapper)
    }

    excluir(entidade: E): Observable<string>{

        return this.http.put(`${environment.baseUrl}/${this.path}/excluir`, entidade, this.config())
        .map(this.mapper)
    }

}