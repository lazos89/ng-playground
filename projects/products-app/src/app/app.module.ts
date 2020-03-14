import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductsModule } from "./products/products.module";
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [BrowserModule, AppRoutingModule, ProductsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
