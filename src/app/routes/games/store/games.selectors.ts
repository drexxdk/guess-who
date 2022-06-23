import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GamesState } from './games.interfaces';
import { gamesFeatureKey } from './games.reducers';

export const selectorsGameState =
  createFeatureSelector<GamesState>(gamesFeatureKey);

export const selectGames = createSelector(
  selectorsGameState,
  (state: GamesState) => state.games
);
