import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

export type validation = 'valid' | 'invalid';
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
  @Input() selected: boolean = false;
  @Input() disabled: boolean = false;
  @Input() hover: boolean = false;
  @Input() validation?: validation;

  @Output() clickEvent = new EventEmitter<void>();

  textShown: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.textShown = !this.textShown;
    this.clickEvent.emit();
  }
}
