import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {BaseService} from '../../arquitetura/servico/base.service';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';

@Injectable()
export class UsuarioService extends BaseService  {

    constructor(private http: Http){
        super()
    }

    listar() : Observable<any>{
        return this.http.get(`${environment.baseUrl}/usuarios`, this.config());
    }

}
