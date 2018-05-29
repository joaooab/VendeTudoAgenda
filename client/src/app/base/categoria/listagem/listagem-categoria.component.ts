import { Component, OnInit } from '@angular/core';

import { Categoria } from '../../modelo/categoria.model';
import {Message} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-categoria',
  templateUrl: './listagem-categoria.component.html',
  styles: []
})
export class ListagemCategoriaComponent implements OnInit {
  cols: Array<any>;
  categorias: Array<any>;
  selectedCategoria: Categoria;
  msgs: Message[] = [];

  constructor(private router:Router) { }

  ngOnInit() {
    this.cols = [
      {field: 'descricao',header:'Categoria'}
    ]
  }

  voltarTelaPrincipal(){
    this.router.navigate(['/principal'])
  }

}
