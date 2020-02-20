import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {
  signInForm = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ])
  });
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.signInForm.value) {
      return;
    }
    this.authService.signIn(this.signInForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl("inbox");
      },
      error: err => {
        if (err.status === 0) {
          this.signInForm.setErrors({ noConnection: true });
        } else if (err.username === err.password) {
          this.signInForm.setErrors({ credentials: true });
        } else {
          this.signInForm.setErrors({ unknownError: true });
        }
      }
    });
  }
}
