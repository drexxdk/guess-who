import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [IconComponent],
  imports: [
    CommonModule,
    InlineSVGModule.forRoot({ baseUrl: environment.baseHref + 'assets/svg/' }),
    HttpClientModule,
  ],
  exports: [IconComponent],
})
export class IconModule {}
