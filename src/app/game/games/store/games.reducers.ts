import { createReducer, on } from '@ngrx/store';
import { GamesState } from './games.interfaces';
import * as GamesActions from './games.actions';

export const gamesFeatureKey = 'GamesState';

export const initialGamesState: GamesState = {
  games: [],
};

export const gamesReducer = createReducer(
  initialGamesState,
  on(GamesActions.fetchGamesSuccess, (state, action) => ({
    ...state,
    games: action.games,
  }))
);
