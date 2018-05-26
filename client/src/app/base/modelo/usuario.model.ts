import { Entidade } from "../../arquitetura/modelo/entidade.model";

export class Usuario extends Entidade {
    nome:string;
    cpfOuCnpj: string;
    email: string;
    dataDeNascimento: string;
    endereco: string;
    telefoneFixo: string;
    celular: string;
    funcao: string;
    senha: string;
    confirmacaoSenha: string;
}