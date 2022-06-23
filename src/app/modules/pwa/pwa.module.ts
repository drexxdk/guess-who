import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstallAppComponent } from './install-app/install-app.component';
import { NewVersionComponent } from './new-version/new-version.component';
import { OnlineStatusComponent } from './online-status/online-status.component';
import { PwaModalComponent } from './pwa-modal/pwa-modal.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [
    InstallAppComponent,
    NewVersionComponent,
    OnlineStatusComponent,
    PwaModalComponent,
  ],
  imports: [CommonModule, IconModule],
  exports: [InstallAppComponent, NewVersionComponent, OnlineStatusComponent],
})
export class PwaModule {}
