import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Contato } from "../../modelo/contato.model";
import { SelectItem, ConfirmationService } from "primeng/api";
import {Message} from 'primeng/api';
import { MessageService } from "primeng/components/common/messageservice";
import { Categoria } from "../../modelo/categoria.model";
import { CategoriaService } from "../../categoria/categoria.service";
import { RespostaRequisicao } from "../../../arquitetura/servico/requisicao";
import { ContatoService } from "../contato.service";
import { Usuario } from "../../modelo/usuario.model";
import { UsuarioService } from "../../usuario/usuario.service";

@Component({
    templateUrl: './contato-cadastro.component.html'
})
export class ContatoCadastroComponent implements OnInit{
    
    private pessoa : SelectItem[];
    option : string = 'Selecione';
    titulo:string;
    nascimento:string;
    data:string;

    configCalendario: any;

    optAutorizaEmail : string;

    private categorias:Categoria[];
    private categoria:Categoria = new Categoria();

    private usuario : Usuario = new Usuario();
    
    private idCategoria;

    msgs: Message[] = [];

    private valorCpfOuCnpj : number[];
    
    private contato: Contato = new Contato();

    constructor(private router:Router,
                private categoriaService:CategoriaService,
                private activatedRoute: ActivatedRoute,
                private contatoService:ContatoService,
                private confirmationService: ConfirmationService,
                private usuarioService: UsuarioService){
        
        this.configCalendario = this.configCalander()
        // this.maxDate = new Date();
        // this.maxDate.setFullYear(2000);
        this.pessoa = [
            {label:'Selecione', value:''},
            {label: 'CPF', value: 'CPF'},
            {label: 'CNPJ', value: 'CNPJ'}
        ];
    }

    ngOnInit(){
        

        this.activatedRoute.params.subscribe(parametro =>{
            if(parametro["id"]==undefined){
                this.titulo = "CADASTRO DE CONTATO";
            }
            else{
                
                this.titulo = "EDITAR CADASTRO DE CONTATO";
                this.contatoService.get(Number(parametro["id"])).subscribe((res)=>{
                    
                    this.contato = res;

                    this.contato.dataNascimento = new Date(this.contato.dataNascimento);

                    if(this.contato.cpf){
                        this.option = "CPF";
                    }
                    if(this.contato.cnpj){
                        this.option = "CNPJ";
                    }

                    if(this.contato.autorizaEmail){
                        this.optAutorizaEmail = 'autorizo';
                    }
                    else if(!this.contato.autorizaEmail){
                        this.optAutorizaEmail = 'naoAutorizo';
                    }
                })
            }
        })


        this.categoriaService.listar().subscribe((res)=>{
            
            this.categorias = res;

        })
    }
    

    salvar(){
        
        if(!this.contato.nome || !this.contato.dataNascimento || !this.contato.endereco || !this.contato.celular || !this.optAutorizaEmail ||!this.idCategoria){
            this.msgs = [];
            this.msgs.push({severity:'error', summary:'Warn Message', detail:'Campos obrigatórios não preenchidos'});

        }else if(!this.verificaDataNascimento()){
            
            this.msgs = [];
            this.msgs.push({severity:'error', summary:'Warn Message', detail:'O contato deve ter idade igual ou superior a 18 anos'});

        }
        else{
            
            this.getCategoria();

            if(this.contato.id == undefined){
               
                if(this.optAutorizaEmail == 'autorizo'){
                    this.contato.autorizaEmail = true;
                }
                if(this.optAutorizaEmail =='naoAutorizo' ){
                    this.contato.autorizaEmail = false;
                }
                
                if(this.contato.cpf){
                    this.contato.cpf = this.removerMascara(this.contato.cpf);
                }

                if(this.contato.cnpj){
                    this.contato.cnpj = this.removerMascara(this.contato.cnpj);
                }

            this.contatoService.salvar(this.montarBody()).subscribe(res=>{
          
                this.msgs = [];
                this.msgs.push({severity:'success', summary:'Service Message', detail:'Dados salvos com sucesso!'});
          
                this.contato = new Contato();
              
              })

            }else{

                if(this.optAutorizaEmail == 'autorizo'){
                    this.contato.autorizaEmail = true;
                }
                if(this.optAutorizaEmail =='naoAutorizo' ){
                    this.contato.autorizaEmail = false;
                }

                

                this.confirmationService.confirm({
                    message: 'Deseja realmente salvar alterações ?',
                    header: 'Confirmation',
                    icon: 'fa fa-trash',
                    accept: () => {
                        
                        console.log(this.contato.cpf.length);
                        //  if(this.contato.cpf.length ){
                        //     this.contato.cpf = this.removerMascara(this.contato.cpf);
                        //  }
        
                        //  if(this.contato.cnpj.length){
                        //       this.contato.cnpj = this.removerMascara(this.contato.cnpj);
                        //  }

                        

                        this.contatoService.alterar(this.montarBody(), this.contato.id).subscribe(res =>{
                            this.msgs = [];
                             this.msgs.push({severity:'success', summary:'Service Message', detail:'Dados alterados com sucesso!'});
                        })

                        
                    },
                    reject: () => {
                        this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
                    }
                });
            }

        }

        
    }
    voltar(){
        this.router.navigate(['/principal'])
    }

    verificaDataNascimento():boolean{
        
        var dataAtual = new Date();

        var diferenca = dataAtual.getFullYear() - this.contato.dataNascimento.getFullYear();


        if(diferenca > 18 ){
            
            return true;
            
            
        }else if(diferenca == 18){
            if(dataAtual.getMonth()>this.contato.dataNascimento.getMonth()){
                return true;
            }else {
                return false;
            }
        }
    }

    montarBody(){
        
        let body = {"contato":
            {
                "nome":this.contato.nome,
                "autorizaEmail":this.contato.autorizaEmail,
                "celular":this.contato.celular,
                "cnpj":this.contato.cnpj,
                "cpf":this.contato.cpf,
                "dataNascimento": this.contato.dataNascimento,
                "email":this.contato.email,
                "endereco":this.contato.endereco,
                "telefoneFixo":this.contato.telefoneFixo,
                "categoria":this.categoria         
            }
        };

    }

    removerMascara(valor){
        
        return valor = valor.replace(/(\.|\/|\-)/g,"");
    }

    adicionarMascaraCpf(cpf){
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
    }

    adicionarMascaraCnpj(cnpj){
        return cnpj.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
    }

    getCategoria(){
        
        this.categoriaService.get(this.idCategoria).subscribe(res =>{
            this.categoria = res;
        });
    }

    private configCalander() {
        return {
            
            closeText: 'Fechar',
            prevText: 'Anterior',
            nextText: 'Próximo',
            currentText: 'Começo',
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
            month: 'Mês',
            week: 'Semana',
            day: 'Dia',
            allDayText : 'Todo o Dia'
        }
    }


}