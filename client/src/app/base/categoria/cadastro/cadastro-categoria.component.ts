import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../modelo/categoria.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-categoria',
  templateUrl: './cadastro-categoria.component.html',
  styleUrls: ['./cadastro-categoria.component.css']
})
export class CadastroCategoriaComponent implements OnInit {

  categoria:Categoria = new Categoria();
  constructor(private router:Router) { }

  ngOnInit() {
  }

  voltarTelaPrincipal(){
    this.router.navigate(['/principal'])
  }

}
