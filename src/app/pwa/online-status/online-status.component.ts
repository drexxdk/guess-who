import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PwaService } from '../pwa.service';

@Component({
  selector: 'app-online-status',
  templateUrl: './online-status.component.html',
  styleUrls: ['./online-status.component.scss'],
})
export class OnlineStatusComponent implements OnInit {
  public readonly isOnline$: Observable<boolean>;

  constructor(private pwaService: PwaService) {
    this.isOnline$ = this.pwaService.isOnline$;
  }

  ngOnInit(): void {}
}
