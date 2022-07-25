import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameNavigation, GameState } from './game.interfaces';
import { gameFeatureKey } from './game.reducers';

export const selectGameState = createFeatureSelector<GameState>(gameFeatureKey);

export const getGame = createSelector(
  selectGameState,
  (state: GameState) => state.game
);

export const getStatus = createSelector(
  selectGameState,
  (state: GameState) => state?.status
);

export const getNavigation = createSelector(
  selectGameState,
  (state: GameState): GameNavigation | undefined =>
    state?.game
      ? {
        currentQuestionNumber: state.game.question.currentQuestionNumber,
        currentQuestionId: state.game.question.currentQuestionId,
        totalQuestions: state.game.question.totalQuestions,
        nextQuestionId: state.game.question.nextQuestionId,
        answered: state.game.question.answer ? true : false,
      }
      : undefined
);
