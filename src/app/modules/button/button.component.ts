import { Component, EventEmitter, Input, Output } from '@angular/core';
import { validation } from '@portal-app/types/validation.type';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() validation?: validation;
  @Input() selected = false;
  @Input() disabled = false;
  @Input() animation = false;

  @Output() clickEvent = new EventEmitter<void>();
  constructor() {}

  onClick() {
    this.clickEvent.emit();
  }
}
