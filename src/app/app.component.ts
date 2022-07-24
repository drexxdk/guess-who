import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routerAnimation } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerAnimation()],
})
export class AppComponent {
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

  getRouteAnimation(outlet: RouterOutlet) {
    return outlet.activatedRouteData['pageType'] === undefined
      ? -1
      : outlet.activatedRouteData['pageType'];
  }
}
