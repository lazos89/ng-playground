import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SignInComponent } from "./sign-in/sign-in.component";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule {}
