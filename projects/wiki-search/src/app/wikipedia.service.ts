import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { pluck, tap } from "rxjs/operators";
interface WikiData {
  query: {
    search: {
      title: string;
      snippet: string;
      pageid: string;
    }[];
  };
}

@Injectable({
  providedIn: "root"
})
export class WikipediaService {
  constructor(private http: HttpClient) {}
  search(term: string) {
    return this.http
      .get<WikiData>("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          format: "json",
          list: "search",
          utf8: "1",
          srsearch: term,
          origin: "*"
        }
      })
      .pipe(pluck("query", "search"));
  }
}
