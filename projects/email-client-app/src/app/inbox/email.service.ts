import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface EmailSummary {
  id: string;
  subject: string;
  from: string;
}
@Injectable({
  providedIn: "root"
})
export class EmailService {
  private url = "https://api.angular-email.com";

  constructor(private http: HttpClient) {}

  fetchEmail() {
    return this.http.get<EmailSummary[]>(`${this.url}/emails`);
  }
}
