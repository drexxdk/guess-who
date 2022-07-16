import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameNavigationComponent } from './game-navigation.component';
import { IconModule } from '../icon/icon.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GameEffects } from '@portal-app/routes/game/state/game.effects';
import {
  gameFeatureKey,
  gameReducer,
} from '@portal-app/routes/game/state/game.reducers';

@NgModule({
  declarations: [GameNavigationComponent],
  imports: [
    CommonModule,
    IconModule,
    StoreModule.forFeature(gameFeatureKey, gameReducer),
    EffectsModule.forFeature([GameEffects]),
  ],
  exports: [GameNavigationComponent],
})
export class GameNavigationModule {}
