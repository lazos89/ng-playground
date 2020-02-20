import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SignInComponent } from "./sign-in/sign-in.component";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { SharedModule } from "../shared/shared.module";
import { SignOutComponent } from './sign-out/sign-out.component';

@NgModule({
  declarations: [SignInComponent, SignUpComponent, SignOutComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule {}
