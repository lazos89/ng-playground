import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductDetailGuard } from "./product-detail.guard";
import { NgModule } from "@angular/core";
import { ProductEditComponent } from "./product-edit/product-edit.component";

export const routes: Routes = [
  { path: "products", component: ProductListComponent },
  {
    path: "products/:id",
    canActivate: [ProductDetailGuard],
    component: ProductDetailsComponent,
  },
  {
    path: "products/:id/edit",
    canActivate: [ProductDetailGuard],
    component: ProductEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
