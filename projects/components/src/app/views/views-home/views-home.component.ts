import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-views-home",
  templateUrl: "./views-home.component.html",
  styleUrls: ["./views-home.component.scss"]
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 12, label: "# of User" },
    { value: 22, label: "Revenue" },
    { value: 42, label: "Reviews" }
  ];
  items = [
    {
      image: "/assets/photo.png",
      title: "Photo",
      description: "Photo description"
    },
    {
      image: "/assets/camera.png",
      title: "Camera",
      description: "Camera description"
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
