import { FormControl } from "@angular/forms";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit {
  @Input() labelName: string;
  @Input() control: FormControl;
  constructor() {}

  ngOnInit(): void {}

  showErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
    // return {control.errors && control.touched && control.dirty}
  }
}
