import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { validation } from '@portal-app/types/validation.type';

@Component({
  selector: 'app-image[alt][ariaLabel]',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  @Input() src?: string;
  @Input() alt!: string;
  @Input() ariaLabel!: string;
  @Input() text?: string;
  @Input() selected = false;
  @Input() disabled = false;
  @Input() validation?: validation;
  @Input() animation = false;

  @Output() clickEvent = new EventEmitter<boolean>();

  @Input() textShown = true;

  onClick() {
    this.textShown = !this.textShown;
    this.clickEvent.emit(this.textShown);
  }
}
