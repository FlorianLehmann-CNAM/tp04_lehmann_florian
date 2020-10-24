import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { CustomValidatorModule } from './modules/customValidatorModule';
import { MatchDirective } from './directives/Match.directive';
import { FormatPhonePipe } from './pipes/formatPhone.pipe';
import { HttpServiceService } from './services/http-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { ShoppingCartState } from './store/states/ShoppingCart.state';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LostComponentComponent } from './components/lost-component/lost-component.component';




@NgModule({
  declarations: [ AppComponent, HeaderComponent, FooterComponent, HomeComponent, LostComponentComponent],
  imports:   [
      BrowserModule, 
      CommonModule, 
      HttpClientModule,
      NgxsModule.forRoot([
            ShoppingCartState
      ]),
      AppRoutingModule
    ],
  bootstrap:    [ AppComponent ],
  providers: [HttpServiceService]
})
export class AppModule { }
