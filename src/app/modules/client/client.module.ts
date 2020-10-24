import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientComponent } from "./client/client.component";
import { CompteFormComponent } from "./compte-form/compte-form.component";
import { RecapComponent } from "./recap/recap.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatchDirective } from "../../directives/Match.directive";
import { FormatPhonePipe } from "../../pipes/formatPhone.pipe";
import { ClientComponentRoutingModule } from "./client-routing.module";
import { CustomValidatorModule } from "../customValidatorModule";

@NgModule({
  declarations: [
    ClientComponent,
    CompteFormComponent,
    RecapComponent,
    MatchDirective,
    FormatPhonePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomValidatorModule,
    ClientComponentRoutingModule
  ]
})
export class ClientModule {}
