import { NgModule } from '@angular/core';
import { LanguageSwitcherComponent } from './language-switcher.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LanguageSwitcherComponent],
  imports: [SharedModule],
  exports: [LanguageSwitcherComponent],
})
export class LanguageSwitcherModule {}
