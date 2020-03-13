import { Component, OnInit } from "@angular/core";
import { IProductList } from "../../core/models/product-list.model";

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
  products: IProductList[] = [
    {
      productId: 1,
      productName: "Leaf Rake",
      productCode: "GDN-0011",
      releaseDate: "March 19, 2019",
      description: "Leaf rake with 48-inch wooden handle.",
      price: 19.95,
      starRating: 3.2,
      imageUrl: "assets/images/leaf_rake.png"
    },
    {
      productId: 2,
      productName: "Garden Cart",
      productCode: "GDN-0023",
      releaseDate: "March 18, 2019",
      description: "15 gallon capacity rolling garden cart",
      price: 32.99,
      starRating: 4.2,
      imageUrl: "assets/images/garden_cart.png"
    },
    {
      productId: 5,
      productName: "Hammer",
      productCode: "TBX-0048",
      releaseDate: "May 21, 2019",
      description: "Curved claw steel hammer",
      price: 8.9,
      starRating: 4.8,
      imageUrl: "assets/images/hammer.png"
    },
    {
      productId: 8,
      productName: "Saw",
      productCode: "TBX-0022",
      releaseDate: "May 15, 2019",
      description: "15-inch steel blade hand saw",
      price: 11.55,
      starRating: 3.7,
      imageUrl: "assets/images/saw.png"
    },
    {
      productId: 10,
      productName: "Video Game Controller",
      productCode: "GMG-0042",
      releaseDate: "October 15, 2018",
      description: "Standard two-button video game controller",
      price: 35.95,
      starRating: 4.6,
      imageUrl: "assets/images/xbox-controller.png"
    }
  ];
  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = "cart";
  }

  ngOnInit(): void {}

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
