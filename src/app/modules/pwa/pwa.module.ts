import { NgModule } from '@angular/core';
import { InstallAppComponent } from './install-app/install-app.component';
import { NewVersionComponent } from './new-version/new-version.component';
import { OnlineStatusComponent } from './online-status/online-status.component';
import { PwaModalComponent } from './pwa-modal/pwa-modal.component';
import { IconModule } from '../icon/icon.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    InstallAppComponent,
    NewVersionComponent,
    OnlineStatusComponent,
    PwaModalComponent,
  ],
  imports: [SharedModule, IconModule],
  exports: [InstallAppComponent, NewVersionComponent, OnlineStatusComponent],
})
export class PwaModule {}
