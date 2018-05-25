import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'breadcrumb',
    templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent {

    pagina = "Dashboard"

    constructor(private router: Router){

    }

    sair(){
        this.router.navigate(['/login'])
    }
}
