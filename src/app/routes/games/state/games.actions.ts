import { createAction, props } from '@ngrx/store';
import { Game, GamesStateGame } from './games.interfaces';

const name = '[Games] ';

export const fetchGames = createAction(name + 'Fetch Games');

export const fetchGamesLoading = createAction(name + 'Fetch Games Loading');

export const fetchGamesSuccess = createAction(
  name + 'Fetch Games Success',
  props<{ games: GamesStateGame[] }>()
);

export const fetchGamesFailure = createAction(
  name + 'Fetch Games Failure',
  props<{ error: Error }>()
);
