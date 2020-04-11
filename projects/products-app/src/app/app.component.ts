import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return "";
  }

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    console.log(this.isLoggedIn);
    console.log("this.isLoggedIn");
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl("welcome");
    console.log("Log out");
  }
}
