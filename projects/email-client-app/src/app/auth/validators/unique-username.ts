import { Injectable } from "@angular/core";
import { AsyncValidator, FormControl, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { AuthService } from "../auth.service";
@Injectable({
  providedIn: "root"
})
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {}
  validate = (control: FormControl): Observable<ValidationErrors> => {
    const { value } = control;
    return this.authService.usernameAvaliable(value).pipe(
      map(() => null),
      catchError(err => {
        if (err.error.username) {
          return of({ nonUniqueUsername: true });
        } else {
          return of({ noConnection: true });
        }
      })
    );
  };
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Method not implemented.");
  }
}
