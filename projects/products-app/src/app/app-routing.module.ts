import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "./home/welcome.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";
import { LoginComponent } from "./auth/login/login.component";

const routes: Routes = [
  // { path: "login", component: LoginComponent },
  { path: "welcome", component: WelcomeComponent },
  { path: "", pathMatch: "full", redirectTo: "welcome" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
