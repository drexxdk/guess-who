import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectNameComponent } from './select-name.component';
import { SelectNameRoutingModule } from './select-name-routing.module';

@NgModule({
  declarations: [SelectNameComponent],
  imports: [CommonModule, SelectNameRoutingModule],
  exports: [SelectNameComponent],
})
export class SelectNameModule {}
