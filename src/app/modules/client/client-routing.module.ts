import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ClientComponent } from './client/client.component';
import { CompteFormComponent } from './compte-form/compte-form.component';

const routes: Routes = [
    {
        path: '',
        component: ClientComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientComponentRoutingModule{}