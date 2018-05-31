import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Contato} from '../../modelo/contato.model';
import {saveAs} from 'file-saver/FileSaver';
import {ContatoService} from '../contato.service';
import {Message} from 'primeng/api';
import {CategoriaService} from '../../categoria/categoria.service';

@Component({
    templateUrl: './contato-listagem.component.html'
})
export class ContatoListagemComponent implements OnInit {
    private contato: Contato[];
    selectedContato: Contato;
    usuarioAutorizado: string;
    msgs: Message[] = [];

    constructor(
        protected contatoService: ContatoService,
        private categoriaService: CategoriaService,
        private router: Router) {
    }

    ngOnInit(): void {
        this.contatoService.listar().subscribe((res) => {
            this.contato = res;
        });
    }

    voltarTelaPrincipal(): void {
        this.router.navigate(['/principal']);
    }

    detalhes() {
        this.msgs = [];
        if (!this.selectedContato) {
            this.msgs.push({severity: 'error', summary: 'Error Message', detail: 'Selecione um contato da lista'});
        }

        this.router.navigate(['cadastros/contato/edicao/' + this.selectedContato.id]);
    }

    gerarRelatorio() {
        this.contatoService.gerarRelatorio().subscribe(result => {
            let blob = this.b64toBlob(result['_body']);
            saveAs(blob, 'contatos.xls');
        });
    }

    b64toBlob(b64Data) {
        var sliceSize = 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

        return new Blob(byteArrays, {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'});
    }

}


