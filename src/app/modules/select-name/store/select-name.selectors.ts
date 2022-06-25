import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SelectNameState } from './select-name.interfaces';
import { selectNameFeatureKey } from './select-name.reducers';

export const selectorsSelectNameState =
  createFeatureSelector<SelectNameState>(selectNameFeatureKey);

export const selectCurrentQuestion = createSelector(
  selectorsSelectNameState,
  (state: SelectNameState) => state.currentQuestion
);
