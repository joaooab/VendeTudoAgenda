import { Http, RequestOptionsArgs, Headers } from "@angular/http";


export function getUsuarioLogado() {

    return localStorage.getItem('user')
}

export function setUsuarioLogado(usuario: any) {

    localStorage.setItem('user', JSON.stringify(usuario))
}


export class BaseService {

    protected config(): RequestOptionsArgs {
        return {
            headers: this.buildHeaders()
        }
    }

    protected buildHeaders(): Headers {

        if (localStorage.getItem('user')) {
            var token = localStorage.getItem('user');
            token = token.replace(/['"]+/g, '');

            return new Headers({


                'Content-Type': 'application/json',
                'Authorization': token
            });
        } else {
            return new Headers({
                'Content-Type': 'application/json'
            });
        }


    }

    protected mapper(resp) {

        try {
            return (resp.json() || resp.text())
        } catch (error) {
            return resp;
        }

    }
}