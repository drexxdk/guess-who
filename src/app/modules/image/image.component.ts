import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { validation } from '@portal-app/types/validation.type';

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
  @Input() validation?: validation;
  @Input() animation: boolean = false;

  @Output() clickEvent = new EventEmitter<void>();

  textShown: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.textShown = !this.textShown;
    this.clickEvent.emit();
  }
}
