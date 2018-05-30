import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Message} from 'primeng/api';

import {Usuario} from '../../modelo/usuario.model';
import {UsuarioService} from '../usuario.service';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styles: []
})
export class ListagemUsuarioComponent implements OnInit {
  cols: Array<any>;
  usuarios: Array<any>;
  selectedUsuario: Usuario;
  msgs: Message[] = [];

  constructor(private usuarioService: UsuarioService,
              private router: Router) { }

  ngOnInit() {
      this.usuarioService.listar().subscribe(result => {
          let usuarios = JSON.parse(result._body);
          this.usuarios = usuarios;
      });

    this.cols = [
      {field: 'nome',header:'Nome'},
      {field: 'cpfOuCnpj', header:'CPF / CNPJ'},
      {field: 'email', header:'E-mail'},
      {field:'funcao',header:'Função'}
    ]
  }

  novo():void{
    this.router.navigate(['/cadastros/usuario/novo']);
  }

  editar():void{
    if(!this.selectedUsuario){
      this.msgs.push({severity:'error', summary:'Error Message', detail:'Selecione um usuário dá lista'});
    }else{
      this.router.navigate(['/cadastros/usuario/edicao/',this.selectedUsuario.id]);
    }
  }

  excluir():void{
    console.log(this.selectedUsuario);
    this.msgs = [];
    if(!this.selectedUsuario){
      this.msgs.push({severity:'error', summary:'Error Message', detail:'Selecione um usuário dá lista'});
    }
  }

  voltarTelaPrincipal(): void{
    this.router.navigate(['/principal']);
  }
}
