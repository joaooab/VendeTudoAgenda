import { BaseService, getUsuarioLogado } from "../arquitetura/servico/base.service";
import { Http } from "@angular/http";
import { LoginRequest } from "./login.request.model";
import {Observable} from "rxjs/Observable";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";

import 'rxjs/add/operator/catch';


export const LOCAL_STORAGE_ITEM_USER : string = 'user';

export function clearToken(){
    
    localStorage.removeItem(LOCAL_STORAGE_ITEM_USER);

}

@Injectable()
export class LoginService extends BaseService{

    constructor(private http: Http){
        
        super()
    }

    logar(loginRequest: LoginRequest) : Observable<any>{

        let body = {"usuario":{"email":loginRequest.email,"senha":loginRequest.senha}};

        return this.http.post(`${environment.baseUrl}/login`, body, this.config())
        
        .map(this.mapper)
        

    }




    
}