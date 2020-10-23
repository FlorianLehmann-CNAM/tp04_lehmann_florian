import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CompteFormComponent } from './components/compte-form/compte-form.component';
import { RecapComponent } from './components/recap/recap.component';
import { CommonModule } from '@angular/common';
import { CustomValidatorModule } from './modules/customValidatorModule';
import { MatchDirective } from './directives/Match.directive';
import { FormatPhonePipe } from './pipes/formatPhone.pipe';
import { HttpServiceService } from './services/http-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { NgxsModule } from '@ngxs/store';
import { ShoppingCartState } from './models/states/ShoppingCart.state';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';




@NgModule({
  imports:   [
      NgxsModule.forRoot([
          ShoppingCartState
      ]),
      BrowserModule, 
      FormsModule, 
      ReactiveFormsModule, 
      CommonModule, 
      CustomValidatorModule, 
      BrowserModule, 
      HttpClientModule],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, CompteFormComponent, RecapComponent, MatchDirective,  FormatPhonePipe, ProductListComponent, SearchBoxComponent, ShoppingCartComponent],
  bootstrap:    [ AppComponent ],
  providers: [HttpServiceService]
})
export class AppModule { }
