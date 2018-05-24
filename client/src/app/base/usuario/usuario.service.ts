import { Injectable } from '@angular/core';
import { Servico } from '../../arquitetura/servico/servico';
import { Usuario } from '../modelo/usuario.model';
import { Http } from '@angular/http';

@Injectable()
export class UsuarioService extends Servico<Usuario> {

  constructor(http: Http) { 
    
    super('usuario', http)
  
  }

}
