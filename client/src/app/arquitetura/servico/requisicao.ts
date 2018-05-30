import { Entidade } from "../modelo/entidade.model";

// export class Embedded<T extends Entidade>{
//     t:T[];
// }

export class RespostaRequisicao<T extends Entidade>{
    _embedded:any;
}