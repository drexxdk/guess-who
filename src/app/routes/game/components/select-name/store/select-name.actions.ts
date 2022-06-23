import { createAction, props } from '@ngrx/store';
import { Question, SelectNameState } from './select-name.interfaces';

const name = '[Select Name] ';

export const loadSelectName = createAction(
  name + 'Load Select Name',
  props<{ id: number }>()
);

export const loadSelectNameSuccess = createAction(
  name + 'Load Select Name Success',
  props<{ state: SelectNameState }>()
);

export const loadSelectNameFailure = createAction(
  name + 'Load Select Name Failure',
  props<{ error: Error }>()
);

export const startSelectName = createAction(name + 'Start Select Name');

export const startSelectNameSuccess = createAction(
  name + 'Start Select Name Success',
  props<{ question: Question }>()
);

export const startSelectNameFailure = createAction(
  name + 'LStart Select Name Failure',
  props<{ error: Error }>()
);

// export const loadAnswerById = createAction(
//   name + 'Load Answer By Id',
//   props<{ id: number }>()
// );

// export const loadAnswerByIdSuccess = createAction(
//   name + 'Load Answer By Id Success',
//   props<{ answer: Answer }>()
// );

// export const loadAnswerByIdFailure = createAction(
//   name + 'Load Answer By Id Failure',
//   props<{ error: Error }>()
// );
