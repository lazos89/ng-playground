import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth/auth.service";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  signedIn$: BehaviorSubject<boolean>;
  constructor(private authService: AuthService) {
    this.signedIn$ = this.authService.isSignedIn$;
  }
  ngOnInit(): void {
    this.authService.checkAuth().subscribe(() => {});
    setTimeout(() => {
      this.authService.signOut().subscribe(() => {});
    }, 5000);
  }
}
