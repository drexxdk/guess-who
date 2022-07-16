import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { validation } from '@portal-app/types/validation.type';

@Component({
  selector: 'app-image[alt][ariaLabel]',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() src?: string;
  @Input() alt!: string;
  @Input() ariaLabel!: string;
  @Input() text?: string;
  @Input() selected: boolean = false;
  @Input() disabled: boolean = false;
  @Input() validation?: validation;
  @Input() animation: boolean = false;

  @Output() clickEvent = new EventEmitter<void>();

  textShown: boolean = true;

  ngOnInit(): void {
    console.log(
      this.src,
      this.selected,
      this.disabled,
      this.validation,
      this.animation
    );
  }

  onClick() {
    this.textShown = !this.textShown;
    this.clickEvent.emit();
  }
}
