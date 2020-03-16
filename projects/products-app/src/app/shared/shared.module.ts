import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StarComponentComponent } from "./star-component/star-component.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [StarComponentComponent],
  imports: [CommonModule],
  exports: [CommonModule, FormsModule, StarComponentComponent]
})
export class SharedModule {}
