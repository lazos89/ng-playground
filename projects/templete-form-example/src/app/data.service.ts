import { of } from "rxjs";
import { Injectable } from "@angular/core";
import { UserSettigns } from "./user-settings-form/user-setting.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  postUserSettingsForm(userSettings: UserSettigns): Observable<any> {
    return this.http.post(
      "https://putsreq.com/30qIlB73bNAEMTZZHdeZ",
      userSettings
    );
    // let parsedBody = JSON.parse(request.body)

    // return of(userSettings);
  }
}
