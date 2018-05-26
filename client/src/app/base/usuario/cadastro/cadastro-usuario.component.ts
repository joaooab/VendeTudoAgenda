import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelo/usuario.model';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styles: []
})
export class CadastroUsuarioComponent implements OnInit {
  usuario: Usuario = new Usuario();
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {

  }

  salvar(){
    console.log(this.usuario);
    //this.usuarioService.salvar(this.usuario);
  }

}
