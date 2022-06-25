import { createAction, props } from '@ngrx/store';
import { GameStateGame } from './game.interfaces';

const name = '[Game] ';

export const fetchGame = createAction(
  name + 'Fetch Game',
  props<{ id: number }>()
);

export const fetchGameLoading = createAction(name + 'Fetch Game Loading');

export const fetchGameSuccess = createAction(
  name + 'Fetch Game Success',
  props<{ game: GameStateGame }>()
);

export const fetchGameFailure = createAction(
  name + 'Fetch Game Failure',
  props<{ error: Error }>()
);

export const closeGame = createAction(name + 'Close Game');
