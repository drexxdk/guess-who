import { NgModule } from '@angular/core';
import { GameNavigationComponent } from './game-navigation.component';
import { IconModule } from '../icon/icon.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GameEffects } from '@portal-app/routes/game/state/game.effects';
import {
  gameFeatureKey,
  gameReducer,
} from '@portal-app/routes/game/state/game.reducers';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GameNavigationComponent],
  imports: [
    SharedModule,
    IconModule,
    StoreModule.forFeature(gameFeatureKey, gameReducer),
    EffectsModule.forFeature([GameEffects]),
  ],
  exports: [GameNavigationComponent],
})
export class GameNavigationModule {}
