import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-photo',
  templateUrl: './select-photo.component.html',
  styleUrls: ['./select-photo.component.scss'],
})
export class SelectPhotoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSelected(selected: string) {
    console.log('selected', selected);
  }
}
