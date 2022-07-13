import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectNameComponent } from './select-name.component';
import { ImageModule } from '@portal-app/modules/image/image.module';
import { IconModule } from '../icon/icon.module';
import { ButtonModule } from '@portal-app/button/button.module';

@NgModule({
  declarations: [SelectNameComponent],
  imports: [CommonModule, ImageModule, IconModule, ButtonModule],
  exports: [SelectNameComponent],
})
export class SelectNameModule {}
