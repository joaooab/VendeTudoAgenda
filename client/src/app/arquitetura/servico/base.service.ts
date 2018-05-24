import {Http, RequestOptionsArgs , Headers} from "@angular/http";


export function getUsuarioLogado() {

    return true;
    //return localStorage.getItem('user')
}

export function setUsuarioLogado(usuario: any) {

    localStorage.setItem('user', JSON.stringify(usuario))
}


export class BaseService {

    protected config(): RequestOptionsArgs {
        return {
            headers : this.buildHeaders()
        }
    }

    protected buildHeaders() : Headers{
        return new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
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