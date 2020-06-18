import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  incrementAsyncAction,
  decrementAsyncAction,
} from "../../redux/counter/counter.thunks";
import { selectCount } from "../../redux/counter/counter.selectors";

export const CounterPage = () => {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(incrementAsyncAction());
  };
  const decrement = () => {
    dispatch(decrementAsyncAction());
  };
  const count = useSelector(selectCount);

  return (
    <div>
      <button onClick={increment}>async +</button>
      {count}
      <button onClick={decrement}>async -</button>
    </div>
  );
};
