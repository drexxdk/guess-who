import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { IconModule } from '../icon/icon.module';
import { GameNavigationModule } from '../game-navigation/game-navigation.module';
import { LanguageSwitcherModule } from '../language-switcher/language-switcher.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [SharedModule, RouterModule, IconModule, GameNavigationModule, LanguageSwitcherModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
