import { NgModule } from '@angular/core';
import { GameSelectPhotoComponent } from './game-select-photo.component';
import { ImageModule } from '@portal-app/modules/image/image.module';
import { HeadlineModule } from '@portal-app/modules/headline/headline.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GameSelectPhotoComponent],
  imports: [SharedModule, ImageModule, HeadlineModule],
  exports: [GameSelectPhotoComponent],
})
export class GameSelectPhotoModule {}
