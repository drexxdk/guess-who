import { createAction, props } from '@ngrx/store';
import { Game } from './games.interfaces';

const name = '[Games] ';

export const fetchGames = createAction(name + 'Fetch Games');

export const fetchGamesSuccess = createAction(
  name + 'Fetch Games Success',
  props<{ games: Game[] }>()
);

export const fetchGamesFailure = createAction(
  name + 'Fetch Games Failure',
  props<{ error: Error }>()
);
