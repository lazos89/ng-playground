import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./product-list/product-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ConvertToSpacesPipe } from "../core/pipes/convert-to-spaces.pipe";
import { SharedModule } from "../shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [ProductListComponent, ConvertToSpacesPipe, ProductDetailsComponent],
  imports: [CommonModule, FormsModule, SharedModule, HttpClientModule],
  exports: [ProductListComponent]
})
export class ProductsModule {}
