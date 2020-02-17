import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { MyStucturalDirectiveDirective } from './my-stuctural-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyDirectiveDirective,
    MyStucturalDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
