import { Component } from "@angular/core";
import { WikipediaService } from "./wikipedia.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "wiki-search";
  pages = [];
  constructor(private wikiSearch: WikipediaService) {}

  onSumbitted(term: string) {
    this.wikiSearch.search(term).subscribe(pages => {
      // console.log(res.query);
      this.pages = pages;
    });
  }
}
