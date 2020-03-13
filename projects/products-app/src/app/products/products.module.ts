import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./product-list/product-list.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule],
  exports: [ProductListComponent]
})
export class ProductsModule {}
