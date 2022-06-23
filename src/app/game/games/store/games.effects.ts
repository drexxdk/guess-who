import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, switchMap } from 'rxjs/operators';
import { GamesApiService } from './games-api.service';
import * as GamesActions from './games.actions';
import { of } from 'rxjs';

@Injectable()
export class GamesEffects {
  constructor(
    private actions$: Actions,
    private gamesApiService: GamesApiService
  ) {}

  fetchGames$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GamesActions.fetchGames),
      exhaustMap(() => {
        return this.gamesApiService.fetchGames().pipe(
          switchMap((games) => {
            return [GamesActions.fetchGamesSuccess({ games: games })];
          }),
          catchError((error) => {
            return of(GamesActions.fetchGamesFailure({ error: error }));
          })
        );
      })
    );
  });
}
