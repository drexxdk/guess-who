import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { PwaModule } from '@portal-app/pwa/pwa.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, PwaModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
