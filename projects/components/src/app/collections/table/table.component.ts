import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit {
  @Input("class") classNames = "";
  @Input() data = [];
  @Input() headers = [];

  constructor() {}

  ngOnInit(): void {}
}
