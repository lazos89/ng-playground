import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap, filter, pluck } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";

interface UsernameAvaliableResponse {
  avaliable: boolean;
}
interface SignedInResponse {
  authenticated: boolean;
  username: string;
}

export interface SignUpCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}
export interface SignInCredentials {
  username: string;
  password: string;
}
interface SignUpResponse {
  username: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  isSignedIn$ = new BehaviorSubject(false);
  private url = "https://api.angular-email.com";
  constructor(private http: HttpClient) {}

  usernameAvaliable(username: String) {
    return this.http.post<UsernameAvaliableResponse>(
      `${this.url}/auth/username`,
      {
        username
      }
    );
  }

  signUp(credentials: SignUpCredentials) {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     "Content-Type": "application/json"
    //   })
    // };
    return this.http
      .post<SignUpResponse>(`${this.url}/auth/signup`, {
        // credentials // TODO: throws error
        username: credentials.username,
        password: credentials.password,
        passwordConfirmation: credentials.passwordConfirmation
      })
      .pipe(tap(() => this.isSignedIn$.next(true)));
  }
  signIn(credentials: SignInCredentials) {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     "Content-Type": "application/json"
    //   })
    // };
    return this.http
      .post<SignUpResponse>(`${this.url}/auth/signin`, {
        // credentials // TODO: throws error
        username: credentials.username,
        password: credentials.password
      })
      .pipe(tap(() => this.isSignedIn$.next(true)));
  }

  checkAuth() {
    return this.http.get<SignedInResponse>(`${this.url}/auth/signedin`).pipe(
      // pluck("authenticated"),
      tap(response => {
        console.log(response);
        this.isSignedIn$.next(response.authenticated);
      })
    );
  }

  signOut() {
    return this.http
      .post(`${this.url}/auth/signout`, {})
      .pipe(tap(() => this.isSignedIn$.next(false)));
  }
}
