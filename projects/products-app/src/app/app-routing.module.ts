import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { ProductDetailsComponent } from "./products/product-details/product-details.component";
import { WelcomeComponent } from "./home/welcome.component";
import { ProductDetailGuard } from "./products/product-detail.guard";

const routes: Routes = [
  { path: "welcome", component: WelcomeComponent },
  { path: "", pathMatch: "full", redirectTo: "welcome" },
  { path: "**", pathMatch: "full", redirectTo: "welcome" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
