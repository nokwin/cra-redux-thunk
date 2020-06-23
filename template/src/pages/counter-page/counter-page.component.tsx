import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";

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
    <>
      <Helmet>
        <title>Counter</title>
      </Helmet>
      <div>
        <button onClick={increment}>async +</button>
        {count}
        <button onClick={decrement}>async -</button>
      </div>
    </>
  );
};
