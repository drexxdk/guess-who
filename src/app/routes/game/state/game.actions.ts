import { createAction, props } from '@ngrx/store';
import {
  GameStateAnswer,
  GameStateGame,
  GameStateQuestion,
} from './game.interfaces';

const name = '[Game] ';

export const fetchGame = createAction(
  name + 'Fetch Game',
  props<{ id: number }>()
);

export const fetchGameSuccess = createAction(
  name + 'Fetch Game Success',
  props<{ game: GameStateGame }>()
);

export const fetchGameFailure = createAction(
  name + 'Fetch Game Failure',
  props<{ error: Error }>()
);

export const closeGame = createAction(name + 'Close Game');

export const submitQuestionAnswer = createAction(
  name + 'Submit Question Answer',
  props<{ questionId: number; optionId: number }>()
);

export const submitQuestionAnswerSuccess = createAction(
  name + 'Submit Question Answer Success',
  props<{ answer: GameStateAnswer }>()
);

export const submitQuestionAnswerFailure = createAction(
  name + 'Submit Question Answer Failure',
  props<{ error: Error }>()
);

export const fetchQuestion = createAction(
  name + 'Fetch Question',
  props<{ questionId: number }>()
);

export const fetchQuestionSuccess = createAction(
  name + 'Fetch Question Success',
  props<{ question: GameStateQuestion }>()
);

export const fetchQuestionFailure = createAction(
  name + 'Fetch Question Failure',
  props<{ error: Error }>()
);
