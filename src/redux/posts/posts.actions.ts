import {
  FETCH_POSTS_STARTED,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
  PostsActionTypes,
  Post,
  CLEAN_POSTS_STATE,
} from "./posts.types";

export const fetchPostsStarted = (): PostsActionTypes => ({
  type: FETCH_POSTS_STARTED,
});

export const fetchPostsSuccess = (posts: Post[]): PostsActionTypes => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (): PostsActionTypes => ({
  type: FETCH_POSTS_FAILURE,
});

export const cleanPostsState = (): PostsActionTypes => ({
  type: CLEAN_POSTS_STATE,
});
