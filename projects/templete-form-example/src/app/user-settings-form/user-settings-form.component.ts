import { Component, OnInit } from "@angular/core";
import { UserSettigns } from "./user-setting.model";

@Component({
  selector: "app-user-settings-form",
  templateUrl: "./user-settings-form.component.html",
  styleUrls: ["./user-settings-form.component.scss"]
})
export class UserSettingsFormComponent implements OnInit {
  originamUserSettings: UserSettigns = {
    name: "Lazos",
    emailOffers: true,
    interfaceStyle: "dark",
    subscriptionType: "Annual",
    notes: ""
  };
  userSettings = { ...this.originamUserSettings };

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {}
}
