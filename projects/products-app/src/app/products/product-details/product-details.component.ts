import { Component, OnInit } from "@angular/core";
import { IProductList } from "../../core/models/product-list.model";

@Component({
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"]
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: "Product Detail";
  product: IProductList;
  constructor() {}

  ngOnInit(): void {}
}
