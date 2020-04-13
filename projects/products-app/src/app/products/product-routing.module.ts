import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductDetailGuard } from "./product-detail.guard";
import { NgModule } from "@angular/core";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { ProductResolver } from "./product-resolver.service";
import { ProductEditInfoComponent } from "./product-edit/product-edit-info/product-edit-info.component";
import { ProductEditTagsComponent } from "./product-edit/product-edit-tags/product-edit-tags.component";

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
    children: [
      { path: "", pathMatch: "full", redirectTo: "info" },
      { path: "info", component: ProductEditInfoComponent },
      { path: "tags", component: ProductEditTagsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
