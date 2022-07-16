import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { validation } from '@portal-app/types/validation.type';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() validation?: validation;
  @Input() selected: boolean = false;
  @Input() disabled: boolean = false;
  @Input() animation: boolean = false;

  @Output() clickEvent = new EventEmitter<void>();
  constructor() {}

  onClick() {
    this.clickEvent.emit();
  }
}
