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
  on(GameActions.fetchGame, (state, action) => ({
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
  })),
  on(GameActions.closeGame, (state) => ({
    ...state,
    status: 'pending',
    game: undefined,
  })),
  on(GameActions.fetchQuestion, (state) => ({
    ...state,
    game: state.game
      ? {
        ...state.game,
        question: {
          ...state.game.question,
          status: 'pending',
        },
      }
      : undefined,
  })),
  on(GameActions.submitQuestionAnswer, (state, action) => ({
    ...state,
    game: state.game
      ? {
        ...state.game,
        question: {
          ...state.game.question,
          status: 'submitting',
          selectedOptionId: action.optionId,
          // options: state.game.question.options.map((option) =>
          //   option.id === action.optionId
          //     ? { ...option, selected: true }
          //     : option
          // ),
        },
      }
      : undefined,
  })),
  on(GameActions.submitQuestionAnswerSuccess, (state, action) => ({
    ...state,
    game: state.game
      ? {
        ...state.game,
        question: {
          ...state.game.question,
          status: 'submitted',
          answer: action.answer,
        },
        // answers: [...state.game.answers, action.answer],
      }
      : undefined,
  })),

  on(GameActions.submitQuestionAnswerFailure, (state, action) => ({
    ...state,
    game: state.game
      ? {
        ...state.game,
        question: {
          ...state.game.question,
          status: 'error',
        },
      }
      : undefined,
  })),
  on(GameActions.fetchQuestionSuccess, (state, action) => ({
    ...state,
    status: 'success',
    game: state.game
      ? {
        ...state.game,
        question: action.question,
      }
      : undefined,
  })),
  on(GameActions.fetchQuestionFailure, (state, action) => ({
    ...state,
    game: state.game
      ? {
        ...state.game,
        question: {
          ...state.game.question,
          status: 'error',
        },
      }
      : undefined,
  }))
);
