import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NewVersionComponent } from '@portal-app/pwa/new-version/new-version.component';
import { OnlineStatusComponent } from '@portal-app/pwa/online-status/online-status.component';
import { NavbarModule } from '@portal-app/navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { IconModule } from '@portal-app/icon/icon.module';

@NgModule({
  declarations: [HeaderComponent, OnlineStatusComponent],
  imports: [CommonModule, NavbarModule, RouterModule, IconModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
