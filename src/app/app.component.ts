import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { routerAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerAnimation()],
})
export class AppComponent {
  title = 'guess-who';

  constructor(private contexts: ChildrenOutletContexts) {}

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
