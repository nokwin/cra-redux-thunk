import { createSelector } from "reselect";

import { RootState } from "../root-types";

const selectPostsState = (state: RootState) => state.posts;

export const selectPosts = createSelector(
  [selectPostsState],
  (posts) => posts.list
);

export const selectIsPostsLoading = createSelector(
  [selectPostsState],
  (posts) => posts.isLoading
);

export const selectIsPostsFailed = createSelector(
  [selectPostsState],
  (posts) => posts.isFailed
);
