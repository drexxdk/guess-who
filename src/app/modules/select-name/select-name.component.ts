import { Component, OnInit } from '@angular/core';

interface person {
  id: number;
  name: string;
}

@Component({
  selector: 'app-select-name',
  templateUrl: './select-name.component.html',
  styleUrls: ['./select-name.component.scss'],
})
export class SelectNameComponent implements OnInit {
  persons: person[] = [
    { id: 1, name: 'Simon Jensen' },
    { id: 2, name: 'Jens Frederiksen' },
    { id: 3, name: 'Hans Mortensen' },
    { id: 4, name: 'Mikkel Hansen' },
  ];
  hover: number | undefined;
  selected: number | undefined;
  result: number | undefined;

  constructor() {}

  ngOnInit(): void {}

  onClick(id: number) {
    if (!this.selected) {
      this.selected = id;
    }

    this.result = 3;
  }
}
