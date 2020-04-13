import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductsModule } from "./products/products.module";
import { WelcomeComponent } from "./home/welcome.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./auth/login/login.component";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { ProductData } from "../api/products/products-data";
import { MessageModule } from "./message/message.module";

@NgModule({
  declarations: [AppComponent, WelcomeComponent, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ProductsModule,
    InMemoryWebApiModule.forRoot(ProductData, { delay: 1000 }),
    FormsModule,
    ReactiveFormsModule,
    MessageModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
