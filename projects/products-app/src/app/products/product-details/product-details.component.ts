import { Component, OnInit } from "@angular/core";
import { IProduct } from "../../core/models/product-list.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../product.service";

@Component({
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string;
  product: IProduct;
  errorMessage: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private prodcutService: ProductService
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get("id");
    this.pageTitle = `Product ${id} Details`;
    // this.product = {
    //   id: id,
    //   productName: "Leaf Rake",
    //   productCode: "GDN-0011",
    //   releaseDate: "March 19, 2019",
    //   description: "Leaf rake with 48-inch wooden handle.",
    //   price: 19.95,
    //   starRating: 3.2,
    //   imageUrl: "assets/images/leaf_rake.png",
    // };
  }

  getProduct() {
    this.prodcutService.getProducts();
  }
  onBack() {
    this.router.navigate(["/products"]);
  }
}
