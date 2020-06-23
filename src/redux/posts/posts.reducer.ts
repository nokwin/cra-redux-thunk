import {
  PostsState,
  PostsActionTypes,
  FETCH_POSTS_STARTED,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "./posts.types";

const initialState: PostsState = {
  list: [],
  isLoading: false,
  isFailed: false,
};

export const postsReducer = (
  state = initialState,
  action: PostsActionTypes
): PostsState => {
  switch (action.type) {
    case FETCH_POSTS_STARTED:
      return {
        ...state,
        isLoading: true,
        isFailed: false,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isFailed: true,
      };
    default:
      return state;
  }
};
