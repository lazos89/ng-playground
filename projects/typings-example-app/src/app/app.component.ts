import { Component } from "@angular/core";
import { lorem } from "faker";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "typings-example-app";
  randomText = lorem.sentence();
  enteredText = "";
  onInput(value: string) {
    this.enteredText = value;
  }

  splitRandomText() {
    return this.randomText.split("");
  }
  compare(letter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return;
    }
    if (letter === enteredLetter) {
      return "correct";
    } else if (letter !== enteredLetter) {
      return "wrong";
    }
    // for (let index = 0; index < this.randomText.length; index++) {
    //   if (this.randomText[index] === this.enteredText[index]) {
    //   }
    // }
  }
}
