import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { GamesRoutingModule } from './games-routing.module';
import { StoreModule } from '@ngrx/store';
import { gamesFeatureKey, gamesReducer } from './store/games.reducers';
import { EffectsModule } from '@ngrx/effects';
import { GamesEffects } from './store/games.effects';

@NgModule({
  declarations: [GamesComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,
    StoreModule.forFeature(gamesFeatureKey, gamesReducer),
    EffectsModule.forFeature([GamesEffects]),
  ],
})
export class GamesModule {}
