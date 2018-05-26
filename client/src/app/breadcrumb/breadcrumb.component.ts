import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { DOCUMENT } from '@angular/platform-browser'
@Component({
    moduleId: module.id,
    selector: 'breadcrumb',
    templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent {

    pagina = "Dashboard"

    constructor(private router: Router,
                @Inject(DOCUMENT) private document: Document){

                this.document.body.classList.add('back-login');
    }

    sair(){
        this.router.navigate(['/login'])
    }
}
