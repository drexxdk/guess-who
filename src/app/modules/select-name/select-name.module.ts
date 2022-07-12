import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectNameComponent } from './select-name.component';
import { ImageModule } from '@portal-app/modules/image/image.module';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [SelectNameComponent],
  imports: [CommonModule, ImageModule, IconModule],
  exports: [SelectNameComponent],
})
export class SelectNameModule {}
