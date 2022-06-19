import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-photo',
  templateUrl: './select-photo.component.html',
  styleUrls: ['./select-photo.component.scss'],
})
export class SelectPhotoComponent implements OnInit {
  photos: string[] = [
    'assets/people/1.webp',
    'assets/people/2.webp',
    'assets/people/3.webp',
    'assets/people/4.webp',
  ];
  hover: string | undefined;
  selected: string | undefined;

  constructor() {}

  ngOnInit(): void {}

  onSelected(selected: string) {
    this.selected = selected;
  }

  onHover(hover: string | undefined) {
    this.hover = hover;
  }
}
