import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'catalogue',
        loadChildren: () => import("./modules/catalog/catalog.module").then(m => m.CatalogModule) 
    },
    {
        path: 'client',
        loadChildren: () => import("./modules/client/client.module").then(m => m.ClientModule)
    },
    {
        path: 'shopping-cart',
        loadChildren: () => import("./modules/shopping-cart/shopping-cart.module").then(m => m.ShoppingCartModule)
    },
    
  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule{}