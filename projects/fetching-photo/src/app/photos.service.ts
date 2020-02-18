import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
interface PhotoResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: "root"
})
export class PhotosService {
  private url = "https://api.unsplash.com/photos/random";
  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http.get<PhotoResponse>(this.url, {
      headers: {
        Authorization: "Client-ID KEY" // ! change KEY  with  real
      }
    });
  }
}
