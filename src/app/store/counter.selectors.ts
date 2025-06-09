import { createSelector } from '@ngrx/store';

export const selectCounter = (state: any) => state.counter;

export const selectDoubleCounter = createSelector(
  selectCounter,
  (counter: number) => counter * 2
);