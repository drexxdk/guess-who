import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  BeforeInstallPromptEvent,
  pwaPlatform,
  PwaService,
} from '../pwa.service';

@Component({
  selector: 'app-install-app',
  templateUrl: './install-app.component.html',
  styleUrls: ['./install-app.component.scss'],
})
export class InstallAppComponent implements OnInit {
  public readonly modalPwaEvent$: Observable<
    BeforeInstallPromptEvent | undefined
  >;
  public readonly modalPwaPlatform$: Observable<pwaPlatform>;

  constructor(private pwaService: PwaService) {
    this.modalPwaEvent$ = this.pwaService.modalPwaEvent$;
    this.modalPwaPlatform$ = this.pwaService.modalPwaPlatform$;
  }

  ngOnInit(): void {}

  onClickClosePwa() {
    this.pwaService.closePwa();
  }

  onClickAddToHomeScreen() {
    this.pwaService.addToHomeScreen();
  }
}
