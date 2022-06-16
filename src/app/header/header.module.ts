import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NewVersionComponent } from '@portal-app/pwa/new-version/new-version.component';
import { OnlineStatusComponent } from '@portal-app/pwa/online-status/online-status.component';
import { NavbarModule } from '@portal-app/navbar/navbar.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, OnlineStatusComponent, NewVersionComponent],
  imports: [CommonModule, NavbarModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
