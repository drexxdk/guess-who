import { NgModule } from '@angular/core';
import { LoadingComponent } from './loading.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoadingComponent],
  imports: [SharedModule],
  exports: [LoadingComponent],
})
export class LoadingModule {}
