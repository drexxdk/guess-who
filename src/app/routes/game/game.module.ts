import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { GameRoutingModule } from './games-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { gameFeatureKey, gameReducer } from './state/game.reducers';
import { GameEffects } from './state/game.effects';
import { GameSelectNameModule } from '@portal-app/modules/game-select-name/game-select-name.module';
import { GameSelectPhotoModule } from '@portal-app/modules/game-select-photo/game-select-photo.module';
import { LoadingModule } from '@portal-app/modules/loading/loading.module';

@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    StoreModule.forFeature(gameFeatureKey, gameReducer),
    EffectsModule.forFeature([GameEffects]),
    GameSelectNameModule,
    GameSelectPhotoModule,
    LoadingModule,
  ],
})
export class GameModule {}
