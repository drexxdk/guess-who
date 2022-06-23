import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectPhotoComponent } from './select-photo.component';
import { SelectPhotoRoutingModule } from './select-photo-routing.module';
import { ImageModule } from '@portal-app/modules/image/image.module';
import { HeadlineModule } from '@portal-app/modules/headline/headline.module';

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
