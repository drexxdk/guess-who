import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameSelectPhotoComponent } from './game-select-photo.component';
import { ImageModule } from '@portal-app/modules/image/image.module';
import { HeadlineModule } from '@portal-app/modules/headline/headline.module';

@NgModule({
  declarations: [GameSelectPhotoComponent],
  imports: [CommonModule, ImageModule, HeadlineModule],
  exports: [GameSelectPhotoComponent],
})
export class GameSelectPhotoModule {}
