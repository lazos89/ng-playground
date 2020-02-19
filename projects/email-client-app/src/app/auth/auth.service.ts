import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface UsernameAvaliableResponse {
  avaliable: boolean;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  usernameAvaliable(username: String) {
    return this.http.post<UsernameAvaliableResponse>(
      "https://api.angular-email.com/auth/username",
      {
        username
      }
    );
  }
  signUp() {}
}
