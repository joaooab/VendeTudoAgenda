import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelo/usuario.model';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from "@angular/router";
import { SelectItem } from 'primeng/components/common/selectitem';


@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  pessoa: SelectItem[];
  funcao: SelectItem[];
  option: string = 'Selecione';
  usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService,
    private activateRoute: ActivatedRoute,
    private router: Router) {
    this.pessoa = [
      { label: 'Selecione', value: '' },
      { label: 'Física', value: 'Física' },
      { label: 'Juridica', value: 'Juridica' }
    ];
    this.funcao = [
      { label: 'Selecione', value: '' },
      { label: 'Administrador', value: 'Administrador' },
      { label: 'Vendedor', value: 'Vendedor' }
    ];
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(parametro => {
      if (parametro["id"] !== undefined)
        console.log(parametro["id"]);
      //this.usuarioService.
    });
  }

  salvar() {
    console.log(this.usuario);
    //this.usuarioService.salvar(this.usuario);
  }

}
