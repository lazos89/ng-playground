import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ElementsModule } from "../../../components/src/app/elements/elements.module";
import { ViewsModule } from "../../../components/src/app/views/views.module";
import { ModsModule } from "../../../components/src/app/mods/mods.module";
import { CollectionsModule } from "../../../components/src/app/collections/collections.module";

@NgModule({
  declarations: [AppComponent],
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
