import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectNameComponent } from './select-name.component';
import { ImageModule } from '@portal-app/modules/image/image.module';

@NgModule({
  declarations: [SelectNameComponent],
  imports: [CommonModule, ImageModule],
  exports: [SelectNameComponent],
})
export class SelectNameModule {}
