import { Component, OnInit, OnDestroy } from "@angular/core";
import { IProduct } from "../../core/models/product-list.model";
import { ProductService } from "../product.service";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit, OnDestroy {
  productSubscription: Subscription;
  imageMargin = 2;
  imageWidth = 50;
  showImage = false;
  pageTitle = "Product List";
  errorMessage = "";
  products: IProduct[];
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

  filteredProducts: IProduct[];

  constructor(private productService: ProductService) {}
  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.productSubscription = this.productService.getProducts().subscribe(
      (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      (error) => (this.errorMessage = error)
    );

    // .subscribe({
    //   next: products => (this.products = products),
    //   error: err => (this.errorMessage = err)
    // });
  }

  onShowClicked() {
    this.showImage = !this.showImage;
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
      // product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }
  onRatingClicked(message: string) {
    this.pageTitle = "Product List: " + message;
    // console.log(message);
  }
}
