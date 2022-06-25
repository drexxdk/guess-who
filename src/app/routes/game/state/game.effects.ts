import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, switchMap, tap } from 'rxjs/operators';
import { GameApiService } from './game-api.service';
import * as GameActions from './game.actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { GameState } from './game.interfaces';
import { Store } from '@ngrx/store';

@Injectable()
export class GameEffects {
  constructor(
    private actions$: Actions,
    private gameApiService: GameApiService,
    private router: Router,
    private gameStore: Store<GameState>
  ) {}

  fetchGame$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GameActions.fetchGame),
      exhaustMap((action) => {
        this.gameStore.dispatch(GameActions.fetchGameLoading());
        return this.gameApiService.fetchGame(action.id).pipe(
          switchMap((game) => {
            return [GameActions.fetchGameSuccess({ game: game })];
          }),
          catchError((error) => {
            return of(GameActions.fetchGameFailure({ error: error }));
          })
        );
      })
    );
  });

  // fetchGameSuccess$ = createEffect(
  //   () => {
  //     return this.actions$.pipe(
  //       ofType(GameActions.fetchGameSuccess),
  //       tap((action) => {
  //         this.router.navigate(['/game/' + action.game.id], {
  //           skipLocationChange: true,
  //         });
  //       })
  //     );
  //   },
  //   { dispatch: false }
  // );

  fetchGameFailure$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(GameActions.fetchGameFailure),
        tap((error) => {
          this.router.navigate(['/error'], { skipLocationChange: true });
        })
      );
    },
    { dispatch: false }
  );
}
