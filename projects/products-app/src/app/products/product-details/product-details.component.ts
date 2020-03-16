import { Component, OnInit } from "@angular/core";
import { IProductList } from "../../core/models/product-list.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"]
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string;
  product: IProductList;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get("id");
    this.pageTitle = `Product ${id} Details`;
    this.product = {
      productId: id,
      productName: "Leaf Rake",
      productCode: "GDN-0011",
      releaseDate: "March 19, 2019",
      description: "Leaf rake with 48-inch wooden handle.",
      price: 19.95,
      starRating: 3.2,
      imageUrl: "assets/images/leaf_rake.png"
    };
  }

  onBack() {
    this.router.navigate(["/products"]);
  }
}
