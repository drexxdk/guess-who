import { createReducer, on } from '@ngrx/store';
import { GamesState } from './games.interfaces';
import * as GamesActions from './games.actions';

export const gamesFeatureKey = 'GamesState';

export const initialGamesState: GamesState = {
  status: 'pending',
  games: [],
};

export const gamesReducer = createReducer(
  initialGamesState,
  on(GamesActions.fetchGamesLoading, (state, action) => ({
    ...state,
    status: 'loading',
  })),
  on(GamesActions.fetchGamesSuccess, (state, action) => ({
    ...state,
    status: 'success',
    games: action.games,
  })),
  on(GamesActions.fetchGamesFailure, (state, action) => ({
    ...state,
    status: 'error',
  }))
);
