import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-page-list",
  templateUrl: "./page-list.component.html",
  styleUrls: ["./page-list.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class PageListComponent implements OnInit {
  @Input() pages = [];
  constructor() {}

  ngOnInit(): void {}
}
