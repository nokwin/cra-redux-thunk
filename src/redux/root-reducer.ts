import { combineReducers } from "redux";

import { counterReducer } from "./counter/counter.reducer";
import { postsReducer } from "./posts/posts.reducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  posts: postsReducer,
});
