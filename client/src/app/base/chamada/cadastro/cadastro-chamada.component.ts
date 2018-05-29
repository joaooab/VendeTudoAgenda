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
            nextText: 'Próximo',
            currentText: 'Começo',
            monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
            monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun', 'Jul','Ago','Set','Out','Nov','Dez'],
            dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
            dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
            dayNamesMin: ['D','S','T','Q','Q','S','S'],
            weekHeader: 'Semana',
            firstDay: 0,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: '',
            timeOnlyTitle: 'Só Horas',
            timeText: 'Tempo',
            hourText: 'Hora',
            minuteText: 'Minuto',
            secondText: 'Segundo',
            ampm: false,
            month: 'Mês',
            week: 'Semana',
            day: 'Dia',
            allDayText : 'Todo o Dia'
        }
    }

}
