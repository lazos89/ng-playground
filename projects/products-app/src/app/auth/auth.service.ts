import { Injectable } from "@angular/core";
import { User } from "./user";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  currentUser: User;

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  // constructor(private messageService: MessageService) { }
  constructor(private route: Router) {}

  login(userName: string, password: string): void {
    console.log(userName);
    console.log(password);

    if (!userName || !password) {
      // this.messageService.addMessage('Please enter your userName and password');
      return;
    }
    if (userName === "admin") {
      this.currentUser = {
        id: 1,
        userName: userName,
        isAdmin: true,
      };
      // this.messageService.addMessage('Admin login');
      return;
    }
    this.currentUser = {
      id: 2,
      userName: userName,
      isAdmin: false,
    };
    console.log(this.currentUser);
    console.log(this.isLoggedIn);
    // this.messageService.addMessage(`User: ${this.currentUser.userName} logged in`);
  }

  logout(): void {
    this.currentUser = null;
  }
}
