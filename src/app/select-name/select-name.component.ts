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

  constructor() {}

  ngOnInit(): void {}
}
