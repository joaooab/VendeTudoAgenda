import {Http, RequestOptionsArgs , Headers} from "@angular/http";


export function getUsuarioLogado() {

    return localStorage.getItem('user')
}

export function getIdUsuarioLogadoNoSistema(){
    return localStorage.getItem('usuario');
}

export function setUsuarioLogado(token:any, usuario:any) {

    localStorage.setItem('user', JSON.stringify(token));

    localStorage.setItem('usuario', JSON.stringify(usuario));
}


export class BaseService {

    protected config(): RequestOptionsArgs {
        return {
            headers : this.buildHeaders()
        }
    }

    protected configLogin(): RequestOptionsArgs {
        return {
            headers : this.buildHeadersLogin()
        }
    } 

    protected buildHeaders() : Headers{
     
        var token = localStorage.getItem('user');
        token = token.replace(/['"]+/g,'');
        
        return new Headers({


            'Content-Type': 'application/json',
            'Authorization': token
        })

        
    }

    protected buildHeadersLogin() : Headers{
     
        
        return new Headers({


            'Content-Type': 'application/json',
            
        })

        
    }

    protected mapper(resp) {
        
        try{
            return (resp.json() || resp.text())
        }catch(error){
            return resp;
        }
    
    }
}