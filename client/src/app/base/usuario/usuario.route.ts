import { Route } from '@angular/router';

import {CadastroComponent} from '../usuario/cadastro/cadastro.component';
import {ListagemComponent} from '../usuario/listagem/listagem.component';

export const UsuarioRoute: Route[] = [
    
    {path: 'cadastros/usuario' , component: ListagemComponent},
    {path: '', component: CadastroComponent}
]

