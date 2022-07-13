import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { validation } from '@portal-app/modules/image/image.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() validation?: validation;
  @Input() selected: boolean = false;
  @Input() disabled: boolean = false;

  @Output() clickEvent = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.clickEvent.emit();
  }
}
