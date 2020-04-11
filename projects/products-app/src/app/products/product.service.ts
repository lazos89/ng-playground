import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IProduct } from "../core/models/product-list.model";
import { catchError } from "rxjs/operators";
import { throwError, Observable, of } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class ProductService {
  private url = "../../api/products/products.json";
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<IProduct[]>(this.url).pipe(
      catchError((err) => {
        return this.handleError(err);
      })
    );
  }
  getProduct(id: number) {
    if (id === 0) {
      return of(this.initializeProduct());
    }
    return this.http.get<IProduct[]>(this.url).pipe(
      catchError((err) => {
        return this.handleError(err);
      })
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An Error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned  code: ${err.status},, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  private initializeProduct(): IProduct {
    // Return an initialized object
    return {
      id: 0,
      productName: null,
      productCode: null,
      category: null,
      tags: [],
      releaseDate: null,
      price: null,
      description: null,
      starRating: null,
      imageUrl: null,
    };
  }
}
