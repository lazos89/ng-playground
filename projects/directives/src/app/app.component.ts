import { Component } from "@angular/core";
import { albums, AlbumsType } from "./albums";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "directives";
  albumsList: AlbumsType[] = albums;
  currentPage = 0;
}
