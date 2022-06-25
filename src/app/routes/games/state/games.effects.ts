import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, switchMap } from 'rxjs/operators';
import { GamesApiService } from './games-api.service';
import * as GamesActions from './games.actions';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { GamesState } from './games.interfaces';

@Injectable()
export class GamesEffects {
  constructor(
    private actions$: Actions,
    private gamesApiService: GamesApiService,
    private gamesStore: Store<GamesState>
  ) {}

  fetchGames$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GamesActions.fetchGames),
      exhaustMap(() => {
        this.gamesStore.dispatch(GamesActions.fetchGamesLoading());
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
