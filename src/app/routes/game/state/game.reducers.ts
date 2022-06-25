import { createReducer, on } from '@ngrx/store';
import { GameState } from './game.interfaces';
import * as GameActions from './game.actions';

export const gameFeatureKey = 'GameState';

export const initialGameState: GameState = {
  status: 'pending',
  game: undefined,
};

export const gameReducer = createReducer(
  initialGameState,
  on(GameActions.fetchGameLoading, (state, action) => ({
    ...state,
    status: 'loading',
  })),
  on(GameActions.fetchGameSuccess, (state, action) => ({
    ...state,
    status: 'success',
    game: action.game,
  })),
  on(GameActions.fetchGameFailure, (state, action) => ({
    ...state,
    status: 'error',
  }))
);
