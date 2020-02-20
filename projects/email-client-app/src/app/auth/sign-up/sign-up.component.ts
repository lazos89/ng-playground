import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatchPasswords } from "../validators/match-passwords";
import { UniqueUsername } from "../validators/unique-username";
import { AuthService, SignUpCredentials } from "../auth.service";
import { Router } from "@angular/router";

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
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
      passwordConfirmation: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ])
    },
    {
      validators: [this.matchPassword.validate]
    }
  );
  constructor(
    private matchPassword: MatchPasswords,
    private uniqueUsername: UniqueUsername,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  data: SignUpCredentials;
  onSubmit() {
    if (!this.signUpForm.value) {
      return;
    }
    this.data = {
      username: "adasdasdasds",
      password: "asdsad",
      passwordConfirmation: "asdsad"
    };
    this.authService.signUp(this.signUpForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl("inbox");
      },
      error: err => {
        if (err.status === 0) {
          this.signUpForm.setErrors({ noConnection: true });
        } else {
          this.signUpForm.setErrors({ unknownError: true });
        }
      }
    });
  }
}
