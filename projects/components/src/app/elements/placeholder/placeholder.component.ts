import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-placeholder",
  templateUrl: "./placeholder.component.html",
  styleUrls: ["./placeholder.component.scss"]
})
export class PlaceholderComponent implements OnInit {
  @Input() header = true;
  @Input() lines = 14;

  constructor() {}

  ngOnInit(): void {}
}
