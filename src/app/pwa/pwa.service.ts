import { Injectable } from '@angular/core';
import {
  SwUpdate,
  VersionEvent,
  VersionReadyEvent,
} from '@angular/service-worker';
import {
  BehaviorSubject,
  filter,
  interval,
  map,
  Observable,
  Subject,
  take,
} from 'rxjs';
import { Platform } from '@angular/cdk/platform';

export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

export type pwaPlatform = 'IOS' | 'ANDROID' | undefined;

@Injectable({
  providedIn: 'root',
})
export class PwaService {
  private isOnline = new BehaviorSubject(false);
  private modalVersion = new BehaviorSubject(false);
  private modalPwaEvent: Subject<BeforeInstallPromptEvent | undefined> =
    new BehaviorSubject<BeforeInstallPromptEvent | undefined>(undefined);
  private modalPwaPlatform: Subject<pwaPlatform> =
    new BehaviorSubject<pwaPlatform>(undefined);

  public isOnline$ = this.isOnline.asObservable();
  public modalVersion$ = this.modalVersion.asObservable();
  public modalPwaEvent$ = this.modalPwaEvent.asObservable();
  public modalPwaPlatform$ = this.modalPwaPlatform.asObservable();

  constructor(private platform: Platform, private swUpdate: SwUpdate) {
    this.updateOnlineStatus();

    window.addEventListener('online', this.updateOnlineStatus.bind(this));
    window.addEventListener('offline', this.updateOnlineStatus.bind(this));

    if (this.swUpdate.isEnabled) {
      // every 5 minutes
      interval(60 * 5 * 1000).subscribe(() => {
        swUpdate.checkForUpdate();
      });

      this.swUpdate.versionUpdates.subscribe((evt: VersionEvent) => {
        if (evt.type === 'VERSION_READY') {
          console.info('PWA', evt);
          this.modalVersion.next(true);
        } else if (evt.type === 'VERSION_INSTALLATION_FAILED') {
          console.warn('PWA', evt);
        }
      });
    }

    this.loadModalPwa();
  }
  private updateOnlineStatus(): void {
    this.isOnline.next(window.navigator.onLine);
  }

  public updateVersion(): void {
    this.modalVersion.next(false);
    this.swUpdate.activateUpdate().then(() => document.location.reload());
  }

  public closeVersion(): void {
    this.modalVersion.next(false);
  }

  private loadModalPwa(): void {
    if (this.platform.ANDROID) {
      window.addEventListener(
        'beforeinstallprompt',
        (e: BeforeInstallPromptEvent) => {
          e.preventDefault();
          this.modalPwaEvent.next(e);
          this.modalPwaPlatform.next('ANDROID');
        }
      );
    }

    if (this.platform.IOS && this.platform.SAFARI) {
      const isInStandaloneMode =
        'standalone' in window.navigator &&
        (<any>window.navigator)['standalone'];
      if (!isInStandaloneMode) {
        this.modalPwaPlatform.next('IOS');
      }
    }
  }

  public addToHomeScreen(): void {
    if (this.modalPwaEvent) {
      this.modalPwaEvent.pipe(take(1)).subscribe((e) => {
        if (e) {
          e.prompt();
        }
        this.modalPwaPlatform.next(undefined);
      });
    }
  }

  public closePwa(): void {
    this.modalPwaPlatform.next(undefined);
  }
}
