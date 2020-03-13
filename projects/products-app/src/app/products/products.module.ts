import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./product-list/product-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ConvertToSpacesPipe } from "../core/pipes/convert-to-spaces.pipe";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [ProductListComponent, ConvertToSpacesPipe],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [ProductListComponent]
})
export class ProductsModule {}
