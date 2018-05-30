import { Component, OnInit } from '@angular/core';
import { Chamada } from '../../modelo/Chamada.model';

import { ActivatedRoute, Router } from "@angular/router";
import { ChamadaService } from '../chamada.service';

@Component({
  selector: 'app-detalhamento-chamada',
  templateUrl: './detalhamento-chamada.component.html',
  styles: []
})
export class DetalhamentoChamadaComponent implements OnInit {
  chamada:Chamada = new Chamada();
  constructor(private chamadaService: ChamadaService,
              private activatedRoute:ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(parametro => {
      if (parametro["id"] !== undefined)
        console.log(parametro["id"]);
        this.chamada.nome = 'Joaquim';
        this.chamada.data = new Date('05/10/2016');
        this.chamada.duracao =  '0 hrs 15 min 46 s';
        this.chamada.descricao = 'Teste';
        //this.chamadaService.
    });
  }

  voltarTelaPrincipal(): void{
    this.router.navigate(['/principal']);
  }

}
