import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, AbstractControl } from "@angular/forms";
import { CustomValidators } from "../custom-validators";
import { delay, filter, scan } from "rxjs/operators";

@Component({
  selector: "app-equation",
  templateUrl: "./equation.component.html",
  styleUrls: ["./equation.component.scss"]
})
export class EquationComponent implements OnInit {
  secondsPerSolution = 0;
  mathForm = new FormGroup(
    {
      x: new FormControl(this.randomNumber()),
      y: new FormControl(this.randomNumber()),
      answer: new FormControl("")
    },
    [
      CustomValidators.equalVal("answer", "x", "y")
      // (form: AbstractControl) => {
      //   const { x, y, answer } = form.value;
      //   if (x + y === parseInt(answer)) {
      //     return null;
      //   }
      //   return { addition: true };
      // }
    ]
  );
  constructor() {}

  ngOnInit(): void {
    this.mathForm.statusChanges
      .pipe(
        delay(100),
        filter(value => value === "VALID"),
        scan(
          acc => {
            return {
              countSolved: acc.countSolved + 1,
              startTime: acc.startTime
            };
          },
          { countSolved: 0, startTime: new Date() }
        )
      )
      .subscribe(({ countSolved, startTime }) => {
        this.mathForm.setValue({
          x: this.randomNumber(),
          y: this.randomNumber(),
          answer: ""
        });
        // countSolved++;
        this.secondsPerSolution =
          (new Date().getTime() - startTime.getTime()) / countSolved / 1000;
        // this.mathForm.get("x").setValue(this.randomNumber());
        // this.mathForm.get("y").setValue(this.randomNumber());
        // this.mathForm.get("answer").setValue("");
      });
  }

  get x() {
    return this.mathForm.get("x").value;
  }
  get y() {
    return this.mathForm.get("y").value;
  }
  // get asnwer() {
  //   return this.mathForm.get("asnwer").value;
  // }
  randomNumber() {
    return Math.floor(Math.random() * 10);
  }
}
