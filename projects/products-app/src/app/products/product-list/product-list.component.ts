import { Component, OnInit } from "@angular/core";
import { IProductList } from "../../core/models/product-list.model";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  imageMargin = 2;
  imageWidth = 50;
  showImage = false;
  pageTitle = "Product List";
  products: IProductList[];
  private _listFilter: string;
  public get listFilter() {
    return this._listFilter;
  }
  public set listFilter(By) {
    this._listFilter = By;
    this.filteredProducts = this._listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  filteredProducts: IProductList[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  onShowClicked() {
    this.showImage = !this.showImage;
  }
  performFilter(filterBy: string): IProductList[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      product =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
      // product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }
  onRatingClicked(message: string) {
    this.pageTitle = "Product List: " + message;
    console.log(message);
  }
}
