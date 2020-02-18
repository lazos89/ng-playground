import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ElementsModule } from "../../../components/src/app/elements/elements.module";
import { ViewsModule } from "../../../components/src/app/views/views.module";
import { ModsModule } from "../../../components/src/app/mods/mods.module";
import { CollectionsModule } from "../../../components/src/app/collections/collections.module";
import { ModsHomeComponent } from './mods/mods-home/mods-home.component';
import { ModalComponent } from './mods/modal/modal.component';

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
