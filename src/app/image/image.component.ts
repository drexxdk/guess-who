import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image[src][alt][ariaLabel]',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() src!: string;
  @Input() alt!: string;
  @Input() ariaLabel!: string;
  @Input() text?: string;
  @Input() disabled: boolean = false;

  @Output() selected = new EventEmitter<string>();
  @Output() hover = new EventEmitter<string | undefined>();

  textShown: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.textShown = !this.textShown;
    this.selected.emit(this.src);
  }

  onPointerEnter() {
    this.hover.emit(this.src);
  }

  onPointerLeave() {
    this.hover.emit(undefined);
  }
}
