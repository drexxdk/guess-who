import { NgModule } from '@angular/core';
import { GameSelectNameComponent } from './game-select-name.component';
import { ImageModule } from '@portal-app/modules/image/image.module';
import { IconModule } from '../icon/icon.module';
import { ButtonModule } from '@portal-app/modules/button/button.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GameSelectNameComponent],
  imports: [SharedModule, ImageModule, IconModule, ButtonModule],
  exports: [GameSelectNameComponent],
})
export class GameSelectNameModule {}
