import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './login/login.guard';

import { ModuleWithProviders } from '@angular/compiler/src/core';

import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        //canActivate: [LoginGuard],
        path: '', children: [
            {path: '', component: DashboardComponent}
        ]
    }
];

export const ClienteRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {useHash:true});