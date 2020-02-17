import { Directive, ElementRef, Input, AfterViewInit } from "@angular/core";

@Directive({
  selector: "[appMyDirective]"
})
export class MyDirectiveDirective {
  constructor(private element: ElementRef) {}

  @Input("appMyDirective") set classNames(classObject: any) {
    for (const key in classObject) {
      if (classObject[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
  // @Input() set backgroundColor(color: string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }
  // @Input() set appMyDirective(color: string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }
  // @Input("appMyDirective") set backgroundColor2(color: string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }
}
