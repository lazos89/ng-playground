import { Validator, ValidationErrors, FormGroup } from "@angular/forms";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root"
})
export class MatchPasswords implements Validator {
  validate(formGroup: FormGroup): ValidationErrors {
    const { password, passwordConfirmation } = formGroup.value;
    if (password === passwordConfirmation) {
      return null;
    } else {
      return { passwordsDontMatch: true };
    }
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Method not implemented.");
  }
}
