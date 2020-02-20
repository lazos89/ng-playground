import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpEventType
} from "@angular/common/http";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = req.clone({ withCredentials: true });
    return next.handle(authReq);
    // .pipe(filter(val => val.type === HttpEventType.Response));
  }
}
