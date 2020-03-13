import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IProductList } from "../core/models/product-list.model";
import { catchError } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class ProductService {
  private url = "../../api/products/products.json";
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<IProductList[]>(this.url).pipe(
      catchError(err => {
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
}
