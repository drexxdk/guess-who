import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GamesState } from './games.interfaces';
import { gamesFeatureKey } from './games.reducers';

export const selectGamesState =
  createFeatureSelector<GamesState>(gamesFeatureKey);

export const selectGames = createSelector(
  selectGamesState,
  (state: GamesState) => state.games
);

export const isLoading = createSelector(
  selectGamesState,
  (state: GamesState) => state.status === 'loading'
);
