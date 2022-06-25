import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameState } from './game.interfaces';
import { gameFeatureKey } from './game.reducers';

export const selectGameState = createFeatureSelector<GameState>(gameFeatureKey);

export const getGame = createSelector(
  selectGameState,
  (state: GameState) => state.game
);

export const getStatus = createSelector(
  selectGameState,
  (state: GameState) => state.status
);
