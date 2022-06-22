import { createAction, props } from '@ngrx/store';

const name = '[Select Name] ';

export const loadSelectName = createAction(
  name + 'Load Select Name',
  props<{ id: number }>()
);
