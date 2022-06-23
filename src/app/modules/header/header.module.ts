import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../navbar/navbar.module';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, NavbarModule, RouterModule, IconModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
