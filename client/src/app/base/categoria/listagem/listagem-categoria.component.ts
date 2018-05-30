import { Component, OnInit } from '@angular/core';

import { Categoria } from '../../modelo/categoria.model';
import {Message, ConfirmationService} from 'primeng/api';
import { Router } from '@angular/router';
import { CategoriaService } from '../categoria.service';
import { RespostaRequisicao } from '../../../arquitetura/servico/requisicao';
import { getFuncaoUsuarioLogado } from '../../../arquitetura/servico/base.service';

@Component({
  selector: 'app-listagem-categoria',
  templateUrl: './listagem-categoria.component.html',
  styles: []
})
export class ListagemCategoriaComponent implements OnInit {
  cols: Array<any>;

  categorias: Categoria[];
  
  selectedCategoria: Categoria;

  usuarioFuncao : string;

  usuarioAutorizado: string;

  msgs: Message[] = [];

  constructor(private router:Router,
              private categoriaService: CategoriaService,
              private confirmationService:ConfirmationService) { 

      this.usuarioFuncao = getFuncaoUsuarioLogado().replace(/['"]+/g,'');

      if(this.usuarioFuncao == 'ADMINISTRADOR'){
          this.usuarioAutorizado = 'sim';
      }

      
  }

  ngOnInit() {

    this.categoriaService.listar().subscribe((res)=>{
        this.categorias = res;
        
    })

  }

  voltarTelaPrincipal(){
    this.router.navigate(['/principal'])
  }

  editar(){
    
    this.router.navigate(['cadastros/categoria/edicao/'+this.selectedCategoria.id]);
  }

  excluir(){


    this.msgs = [];
        if(!this.selectedCategoria){
            this.msgs.push({severity:'error', summary:'Error Message', detail:'Selecione uma categoria da lista'});
        }else{
            this.confirmationService.confirm({
                message: 'Deseja realmente excluir este contato ?',
                header: 'Delete Confirmation',
                icon: 'fa fa-trash',
                accept: () => {
                  
                  this.categoriaService.excluir(this.selectedCategoria.id).subscribe(res =>{
                    this.msgs = [];
                    this.msgs.push({severity:'success', summary:'Service Message', detail:'Dado excluido com sucesso!'});
                    
                    this.categoriaService.listar().subscribe((res)=>{
                      this.categorias = res;
                      
                    })
              
                  })
                    
                },
                reject: () => {
                    this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
                }
            });
        }

    
  }

}
