import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { GamesRoutingModule } from './games-routing.module';
import { StoreModule } from '@ngrx/store';
import { gamesFeatureKey, gamesReducer } from './state/games.reducers';
import { EffectsModule } from '@ngrx/effects';
import { GamesEffects } from './state/games.effects';
import { ButtonModule } from '@portal-app/button/button.module';

@NgModule({
  declarations: [GamesComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,
    StoreModule.forFeature(gamesFeatureKey, gamesReducer),
    EffectsModule.forFeature([GamesEffects]),
    ButtonModule,
  ],
})
export class GamesModule {}
