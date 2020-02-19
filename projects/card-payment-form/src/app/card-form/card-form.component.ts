import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DateFormControl } from "../date-form-control";

@Component({
  selector: "app-card-form",
  templateUrl: "./card-form.component.html",
  styleUrls: ["./card-form.component.scss"]
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    cardName: new FormControl("", [
      Validators.required,
      Validators.minLength(3)
      // Validators.maxLength(5),
      // Validators.pattern(/\s/)
    ]),
    cardNumber: new FormControl("", [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16)
    ]),
    cardExpiration: new DateFormControl("", [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
    ]),
    cardSecurityCode: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3)
    ])
  });
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log("Form was Submitted");
  }

  onResetClick() {
    this.cardForm.reset("");
  }
}
