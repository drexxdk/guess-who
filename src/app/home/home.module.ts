import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SelectNameModule } from '@portal-app/game/select-name/select-name.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SelectNameModule],
  exports: [HomeComponent],
})
export class HomeModule {}
