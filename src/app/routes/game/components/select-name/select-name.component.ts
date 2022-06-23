import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-name',
  templateUrl: './select-name.component.html',
  styleUrls: ['./select-name.component.scss'],
})
export class SelectNameComponent implements OnInit {
  names: string[] = [
    'Simon Jensen',
    'Jens Frederiksen',
    'Hans Mortensen',
    'Mikkel Hansen',
  ];
  hover: string | undefined;
  selected: string | undefined;

  constructor() {}

  ngOnInit(): void {}

  onSelected(selected: string) {
    this.selected = selected;
  }

  onClick(name: string) {
    if (!this.selected) {
      this.selected = name;
    }
  }

  onPointerEnter(name: string, $event: PointerEvent) {
    this.hover = name;
  }

  onPointerLeave($event: PointerEvent) {
    this.hover = undefined;
  }
}
