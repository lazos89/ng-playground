import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductDetailGuard } from "./product-detail.guard";
import { NgModule } from "@angular/core";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { ProductResolver } from "./product-resolver.service";

export const routes: Routes = [
  { path: "products", component: ProductListComponent },
  {
    path: "products/:id",
    canActivate: [ProductDetailGuard],
    component: ProductDetailsComponent,
    resolve: { resolveData: ProductResolver },
  },
  {
    path: "products/:id/edit",
    canActivate: [ProductDetailGuard],
    component: ProductEditComponent,
    resolve: { resolveData: ProductResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
