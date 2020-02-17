import { Directive, ViewContainerRef, TemplateRef, Input } from "@angular/core";

@Directive({
  selector: "[appMyStucturalDirective]"
})
export class MyStucturalDirectiveDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input("appMyStucturalDirective") set render(times: number) {
    this.viewContainer.clear();
    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i
      });
    }
  }
}
