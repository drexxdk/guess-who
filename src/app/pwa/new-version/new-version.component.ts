import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PwaService } from '../pwa.service';

@Component({
  selector: 'app-new-version',
  templateUrl: './new-version.component.html',
  styleUrls: ['./new-version.component.scss'],
})
export class NewVersionComponent implements OnInit {
  public readonly modalVersion$: Observable<boolean>;

  constructor(private pwaService: PwaService) {
    this.modalVersion$ = this.pwaService.modalVersion$;
  }

  ngOnInit(): void {}

  onClickCloseVersion(): void {
    this.pwaService.closeVersion();
  }

  onClickUpdateVersion(): void {
    this.pwaService.updateVersion();
  }
}
