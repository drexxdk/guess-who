import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstallAppComponent } from './install-app/install-app.component';
import { NewVersionComponent } from './new-version/new-version.component';
import { OnlineStatusComponent } from './online-status/online-status.component';
import { IconModule } from '@portal-app/icon/icon.module';
import { PwaModalComponent } from './pwa-modal/pwa-modal.component';

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
