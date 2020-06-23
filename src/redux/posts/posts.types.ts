export const FETCH_POSTS_STARTED = "FETCH_POSTS_STARTED";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
export const CLEAN_POSTS_STATE = "CLEAN_POSTS_STATE";

export interface PostsState {
  list: Post[];
  isLoading: boolean;
  isFailed: boolean;
}

interface FetchPostsStarted {
  type: typeof FETCH_POSTS_STARTED;
}

interface FetchPostsSuccess {
  type: typeof FETCH_POSTS_SUCCESS;
  payload: Post[];
}

interface FetchPostsFailure {
  type: typeof FETCH_POSTS_FAILURE;
}

interface CleanPostsState {
  type: typeof CLEAN_POSTS_STATE;
}

export type PostsActionTypes =
  | FetchPostsStarted
  | FetchPostsSuccess
  | FetchPostsFailure
  | CleanPostsState;

export interface Post {
  data: {
    id: string;
    title: string;
    author: string;
    permalink: string;
  };
}

export interface SubRedditResponse {
  data: {
    children: Post[];
  };
}
