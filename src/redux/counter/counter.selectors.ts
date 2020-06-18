import { createSelector } from "reselect";

import { RootState } from "../root-types";

const selectCounter = (state: RootState) => state.counter;

export const selectCount = createSelector(
  [selectCounter],
  (counter) => counter.count
);
