import { Component, OnInit } from '@angular/core';
import { UserSettigns } from './user-setting.model';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss']
})
export class UserSettingsFormComponent implements OnInit {
  originamUserSettings: UserSettigns = {
    name: 'Lazos',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: ''
  };
  userSettings = { ...this.originamUserSettings };
  postError = false;
  postErrorMessage = '';
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log('on submit error: ', form.valid);
    this.dataService.postUserSettingsForm(this.userSettings).subscribe({
      next: settings => console.log(settings),
      error: _ => console.log('Error')
    });
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      settings => console.log(settings),
      error => this.onHttpError(error)
    );
  }
  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }
  onBlur(field: NgModel) {
    console.log('Name field Valid:  ', field.valid);
  }
}
