import { Directive, ViewContainerRef, TemplateRef, Input } from "@angular/core";

@Directive({
  selector: "[appPlaceholderLines]"
})
export class PlaceholderLinesDirective {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input("appPlaceholderLines") set render(lines: number) {
    this.viewContainerRef.clear();
    for (let i = 0; i < lines; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {});
    }
  }
}
