import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'guess-who';

  @HostListener('contextmenu', ['$event'])
  public onContextMenu($event: Event): void {
    if (
      $event instanceof PointerEvent &&
      $event.pointerType === 'touch' &&
      $event.target instanceof HTMLElement
    ) {
      $event.preventDefault();
      $event.target.click();
    }
  }
}
