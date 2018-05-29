import { Entidade } from "../../arquitetura/modelo/entidade.model";
import { Categoria } from "./categoria.model";
import { Chamada } from "./Chamada.model";

export class Contato extends Entidade {
    
    nome:string;

    cpf: string;

    cnpj: string;

    email: string;

    dataNascimento: Date;

    endereco: string;

    telefoneFixo: number;

    celular: number;

    autorizaEmail: boolean;

    categoria:Categoria;

    ligacoes:Chamada;

}