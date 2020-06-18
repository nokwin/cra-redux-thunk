import { incrementAction, decrementAction } from "./counter.actions";
import { AppThunk } from "../root-types";

export const incrementAsyncAction = (): AppThunk => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementAction());
  }, 1000);
};

export const decrementAsyncAction = (): AppThunk => (dispatch) => {
  setTimeout(() => {
    dispatch(decrementAction());
  }, 1000);
};
