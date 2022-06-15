import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineStatusComponent } from './online-status/online-status.component';
import { NewVersionComponent } from './new-version/new-version.component';
import { InstallAppComponent } from './install-app/install-app.component';

@NgModule({
  declarations: [
    OnlineStatusComponent,
    NewVersionComponent,
    InstallAppComponent,
  ],
  imports: [CommonModule],
  exports: [OnlineStatusComponent, NewVersionComponent, InstallAppComponent],
})
export class PwaModule {}
