<<<<<<< HEAD
import { Entidade } from "../../arquitetura/modelo/entidade.model";
=======
import { Entidade } from "../modelo/entidade.model";
>>>>>>> f68e512438b15d28c1ff4ecf1f03ecf976dc5dc7

// export class Embedded<T extends Entidade>{
//     t:T[];
// }

export class RespostaRequisicao<T extends Entidade>{
    _embedded:any;
}