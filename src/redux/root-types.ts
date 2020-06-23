import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { AxiosInstance } from "axios";

import { rootReducer } from "./root-reducer";

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  {
    api: AxiosInstance;
  },
  Action<string>
>;
