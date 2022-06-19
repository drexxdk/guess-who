import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectPhotoComponent } from './select-photo.component';
import { SelectPhotoRoutingModule } from './select-photo-routing.module';
import { ImageModule } from '@portal-app/image/image.module';
import { HeadlineModule } from '../headline/headline.module';

@NgModule({
  declarations: [SelectPhotoComponent],
  imports: [
    CommonModule,
    SelectPhotoRoutingModule,
    ImageModule,
    HeadlineModule,
  ],
})
export class SelectPhotoModule {}
