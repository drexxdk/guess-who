import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectNameComponent } from './select-name.component';
import { SelectNameRoutingModule } from './select-name-routing.module';
import { ImageModule } from '@portal-app/image/image.module';

@NgModule({
  declarations: [SelectNameComponent],
  imports: [CommonModule, SelectNameRoutingModule, ImageModule],
  exports: [SelectNameComponent],
})
export class SelectNameModule {}
