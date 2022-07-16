import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { IconModule } from '../icon/icon.module';
import { GameNavigationModule } from '../game-navigation/game-navigation.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, IconModule, GameNavigationModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
