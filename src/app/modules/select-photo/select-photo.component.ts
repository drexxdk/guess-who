import { Component, OnInit } from '@angular/core';

interface photo {
  id: number;
  url: string;
}

@Component({
  selector: 'app-select-photo',
  templateUrl: './select-photo.component.html',
  styleUrls: ['./select-photo.component.scss'],
})
export class SelectPhotoComponent implements OnInit {
  photos: photo[] = [
    { id: 1, url: 'assets/people/1.webp' },
    { id: 2, url: 'assets/people/2.webp' },
    { id: 3, url: 'assets/people/3.webp' },
    { id: 4, url: 'assets/people/4.webp' },
  ];
  hover: number | undefined;
  selected: number | undefined;
  result: number | undefined;

  constructor() {}

  ngOnInit(): void {}

  onSelected(id: number) {
    this.selected = id;
    this.result = 2;
  }

  onHover(id: number | undefined) {
    this.hover = id;
  }
}
