import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  loginForm;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  login(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);

      // Navigate to the Product List page after log in.
      this.router.navigate(["/products"]);
    } else {
      this.errorMessage = "Please enter a user name and password.";
    }
  }
}