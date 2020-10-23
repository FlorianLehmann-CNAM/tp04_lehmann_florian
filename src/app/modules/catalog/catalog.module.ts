import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { CatalogueComponentRoutingModule } from './catalog-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpServiceService } from 'src/app/services/http-service.service';



@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    CatalogueComponentRoutingModule,
    HttpClientModule
  ],
  providers: [HttpServiceService]
})
export class CatalogModule { }
