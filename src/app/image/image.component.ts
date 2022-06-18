import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image[image]',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() text?: string;
  @Input() image!: string;

  textShown: boolean = true;

  @Output() selected = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.textShown = !this.textShown;
    this.selected.emit(this.image);
  }
}
