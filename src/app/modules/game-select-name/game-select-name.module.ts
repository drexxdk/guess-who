import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameSelectNameComponent } from './game-select-name.component';
import { ImageModule } from '@portal-app/modules/image/image.module';
import { IconModule } from '../icon/icon.module';
import { ButtonModule } from '@portal-app/modules/button/button.module';

@NgModule({
  declarations: [GameSelectNameComponent],
  imports: [CommonModule, ImageModule, IconModule, ButtonModule],
  exports: [GameSelectNameComponent],
})
export class GameSelectNameModule {}
