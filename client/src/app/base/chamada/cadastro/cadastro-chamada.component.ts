import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelo/usuario.model';
import { ChamadaService } from '../chamda.service';
import {Chamada} from "../../modelo/Chamada.model";


@Component({
    selector: 'app-cadastro-chamada',
    templateUrl: './cadastro-chamada.component.html',
    styles: []
})
export class CadastroChamadaComponent implements OnInit {
    chamada: Chamada;
    configCalendario: any;
    constructor(private chamadaService: ChamadaService) {

        this.chamada = new Chamada();
        this.configCalendario = this.configCalander();
    }

    ngOnInit() {

    }

    salvar(){
        console.log(this.chamada);

    }

    private configCalander() {
        return {
            closeText: 'Fechar',
            prevText: 'Anterior',
            nextText: 'Pr�ximo',
            currentText: 'Come�o',
            monthNames: ['Janeiro','Fevereiro','Mar�o','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
            monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun', 'Jul','Ago','Set','Out','Nov','Dez'],
            dayNames: ['Domingo','Segunda','Ter�a','Quarta','Quinta','Sexta','S�bado'],
            dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','S�b'],
            dayNamesMin: ['D','S','T','Q','Q','S','S'],
            weekHeader: 'Semana',
            firstDay: 0,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: '',
            timeOnlyTitle: 'S� Horas',
            timeText: 'Tempo',
            hourText: 'Hora',
            minuteText: 'Minuto',
            secondText: 'Segundo',
            ampm: false,
            month: 'M�s',
            week: 'Semana',
            day: 'Dia',
            allDayText : 'Todo o Dia'
        }
    }

}
