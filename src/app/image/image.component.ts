import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image[image]',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() image!: string;
  @Input() text?: string;
  @Input() disabled: boolean = false;

  @Output() selected = new EventEmitter<string>();
  @Output() hover = new EventEmitter<string | undefined>();

  textShown: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    if (!this.disabled) {
      this.textShown = !this.textShown;
      this.selected.emit(this.image);
    }
  }

  onPointerEnter() {
    if (!this.disabled) {
      this.hover.emit(this.image);
    }
  }

  onPointerLeave() {
    if (!this.disabled) {
      this.hover.emit(undefined);
    }
  }
}
