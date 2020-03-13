import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./product-list/product-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ConvertToSpacesPipe } from "../core/pipes/convert-to-spaces.pipe";

@NgModule({
  declarations: [ProductListComponent, ConvertToSpacesPipe],
  imports: [CommonModule, FormsModule],
  exports: [ProductListComponent]
})
export class ProductsModule {}
