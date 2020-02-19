import { Directive, ElementRef, OnInit } from "@angular/core";
import { NgControl } from "@angular/forms";
import { map, filter } from "rxjs/operators";

@Directive({
  selector: "[appAnswerHighlight]"
})
export class AnswerHighlightDirective implements OnInit {
  constructor(private el: ElementRef, private controlName: NgControl) {}
  ngOnInit() {
    this.el.nativeElement.style;
    this.controlName.control.parent.valueChanges
      .pipe(
        map(({ x, y, answer }) => Math.abs((x + y - answer) / (x + y))),
        filter(value => value < 0.2)
      )
      .subscribe(value => {
        if (value < 0.2) {
          this.el.nativeElement.classList.add("close");
        } else {
          this.el.nativeElement.classList.remove("close");
        }
      });
  }
}
