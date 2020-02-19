import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatchPasswords } from "../validators/match-passwords";
import { UniqueUsername } from "../validators/unique-username";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {
  signUpForm = new FormGroup(
    {
      username: new FormControl(
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-z0-9]+$/)
        ],
        [this.uniqueUsername.validate]
      ),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      passwordConfirmation: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ])
    },
    {
      validators: [this.matchPassword.validate]
    }
  );
  constructor(
    private matchPassword: MatchPasswords,
    private uniqueUsername: UniqueUsername
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.signUpForm.get("username").value);
  }
}
