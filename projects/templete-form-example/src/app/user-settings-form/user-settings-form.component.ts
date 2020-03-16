import { Component, OnInit } from "@angular/core";
import { UserSettigns } from "./user-setting.model";
import { NgForm, NgModel } from "@angular/forms";

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

  onSubmit(form: NgForm) {
    console.log("on submit error: ", form.valid);
  }
  onBlur(field: NgModel) {
    console.log("Name field Valid:  ", field.valid);
  }
}
