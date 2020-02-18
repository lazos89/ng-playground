import { Component, OnInit } from "@angular/core";
import { PhotosService } from "../photos.service";

@Component({
  selector: "app-photo-show",
  templateUrl: "./photo-show.component.html",
  styleUrls: ["./photo-show.component.scss"]
})
export class PhotoShowComponent implements OnInit {
  photoUrl = "";
  constructor(private photoSrv: PhotosService) {}

  ngOnInit(): void {
    this.fetchPhoto();
  }
  private fetchPhoto() {
    this.photoSrv.getPhoto().subscribe(response => {
      this.photoUrl = response.urls.regular;
    });
  }
  onClick() {
    this.fetchPhoto();
  }
}
