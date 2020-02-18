import {
  Component,
  OnInit,
  ElementRef,
  OnDestroy,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit, OnDestroy {
  @Output() closeModal = new EventEmitter();

  constructor(private el: ElementRef) {
    console.log(this.el.nativeElement);
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }
  ngOnDestroy(): void {
    // document.body.remove();
  }
  onCloseModal() {
    this.closeModal.emit();
  }
}
