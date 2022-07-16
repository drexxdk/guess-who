import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, switchMap, tap } from 'rxjs/operators';
import { GameApiService } from './game-api.service';
import * as GameActions from './game.actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { GameState } from './game.interfaces';
import { createAction, Store } from '@ngrx/store';

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
      switchMap((action) => {
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

  submitQuestionAnswer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GameActions.submitQuestionAnswer),
      switchMap((action) => {
        return this.gameApiService
          .submitQuestionAnswer(action.questionId, action.optionId)
          .pipe(
            switchMap((answer) => {
              return [
                GameActions.submitQuestionAnswerSuccess({ answer: answer }),
              ];
            }),
            catchError((error) => {
              return of(GameActions.fetchGameFailure({ error: error }));
            })
          );
      })
    );
  });

  fetchQuestion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GameActions.fetchQuestion),
      switchMap((action) => {
        return this.gameApiService.fetchQuestion(action.questionId).pipe(
          switchMap((question) => {
            return [GameActions.fetchQuestionSuccess({ question: question })];
          }),
          catchError((error) => {
            return of(GameActions.fetchQuestionFailure({ error: error }));
          })
        );
      })
    );
  });
}
