import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

type validation = 'valid' | 'invalid';
@Component({
  selector: 'app-image[src][alt][ariaLabel]',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() id?: number;
  @Input() src!: string;
  @Input() alt!: string;
  @Input() ariaLabel!: string;
  @Input() text?: string;
  @Input() disabled: boolean = false;
  @Input() validation?: validation;

  @Output() selected = new EventEmitter<number>();
  @Output() hover = new EventEmitter<number | undefined>();

  textShown: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.textShown = !this.textShown;
    if (this.id) {
      this.selected.emit(this.id);
    }
  }

  onPointerEnter($event: PointerEvent) {
    if (this.id) {
      this.hover.emit(this.id);
    }
  }

  onPointerLeave($event: PointerEvent) {
    this.hover.emit(undefined);
  }
}
