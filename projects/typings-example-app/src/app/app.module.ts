import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CollectionsModule } from "../../../components/src/app/collections/collections.module";
import { ElementsModule } from "../../../components/src/app/elements/elements.module";
import { ModsModule } from "../../../components/src/app/mods/mods.module";
import { ViewsModule } from "../../../components/src/app/views/views.module";
import { AppComponent } from "./app.component";
import { ModalComponent } from "./mods/modal/modal.component";
import { ModsHomeComponent } from "./mods/mods-home/mods-home.component";

@NgModule({
  declarations: [AppComponent, ModsHomeComponent, ModalComponent],
  imports: [
    BrowserModule,
    ElementsModule,
    ViewsModule,
    ModsModule,
    CollectionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
