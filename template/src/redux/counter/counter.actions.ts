import { INCREMENT, DECREMENT, CounterActionTypes } from "./counter.types";

export const incrementAction = (): CounterActionTypes => ({
  type: INCREMENT,
});

export const decrementAction = (): CounterActionTypes => ({
  type: DECREMENT,
});
