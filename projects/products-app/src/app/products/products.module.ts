import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ConvertToSpacesPipe } from "../core/pipes/convert-to-spaces.pipe";
import { SharedModule } from "../shared/shared.module";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductRoutingModule } from "./product-routing.module";
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailsComponent,
    ProductEditComponent
  ],
  imports: [SharedModule, HttpClientModule, ProductRoutingModule]
})
export class ProductsModule {}
