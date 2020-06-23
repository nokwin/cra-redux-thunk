import {
  fetchPostsStarted,
  fetchPostsSuccess,
  fetchPostsFailure,
} from "./posts.actions";
import { AppThunk } from "../root-types";
import { SubRedditResponse } from "./posts.types";

export const fetchPosts = (): AppThunk => async (
  dispatch,
  getState,
  { api }
) => {
  try {
    await dispatch(fetchPostsStarted());

    const { data } = await api.get<SubRedditResponse>("/react.json");

    dispatch(fetchPostsSuccess(data.data.children));
  } catch (error) {
    console.error(error);
    dispatch(fetchPostsFailure());
  }
};
