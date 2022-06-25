import { createReducer } from '@ngrx/store';
import { SelectNameState } from './select-name.interfaces';

export const selectNameFeatureKey = 'SelectNameState';

export const initialSelectNameState: SelectNameState = {
  answers: [],
  currentQuestion: undefined,
  questions: [],
};

export const selectNameReducer = createReducer(initialSelectNameState);
