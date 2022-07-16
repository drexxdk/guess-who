import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameNavigationComponent } from './game-navigation.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [GameNavigationComponent],
  imports: [CommonModule, IconModule],
  exports: [GameNavigationComponent],
})
export class GameNavigationModule {}
