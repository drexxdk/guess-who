import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';

type align = 'left' | 'center' | 'right';

@Component({
  selector: 'app-headline[text]',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss'],
})
export class HeadlineComponent implements OnInit {
  @Input() text!: string;
  @Input() align: align = 'left';

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.dataset.align = this.align;
  }
}
