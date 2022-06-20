import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import { HeadlineModule } from '@portal-app/game/headline/headline.module';
import { IconModule } from '@portal-app/icon/icon.module';

@NgModule({
  declarations: [ImageComponent],
  imports: [CommonModule, HeadlineModule, IconModule],
  exports: [ImageComponent],
})
export class ImageModule {}
