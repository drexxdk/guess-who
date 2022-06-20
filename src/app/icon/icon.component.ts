import { Component, Input, OnInit } from '@angular/core';

type size = 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28;

@Component({
  selector: 'app-icon[svg]',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() svg!: string;
  @Input() size?: size;

  constructor() {}

  ngOnInit(): void {}
}
