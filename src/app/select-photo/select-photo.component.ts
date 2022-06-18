import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-photo',
  templateUrl: './select-photo.component.html',
  styleUrls: ['./select-photo.component.scss'],
})
export class SelectPhotoComponent implements OnInit {
  photos: string[] = ['profile-1', 'profile-2', 'profile-3', 'profile-4'];
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
