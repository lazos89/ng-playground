import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputComponent } from "./input/input.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
  declarations: [InputComponent, HeaderComponent],
  imports: [CommonModule, AppRoutingModule, ReactiveFormsModule],
  exports: [InputComponent, HeaderComponent]
})
export class SharedModule {}
