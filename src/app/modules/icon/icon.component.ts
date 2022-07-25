import { Component, Input } from '@angular/core';

type size = 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28;
type rotate = 45 | 90 | 135 | 180 | 225 | 270 | 315;

@Component({
  selector: 'app-icon[svg]',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() svg!: string;
  @Input() size?: size;
  @Input() rotate?: rotate;

}
