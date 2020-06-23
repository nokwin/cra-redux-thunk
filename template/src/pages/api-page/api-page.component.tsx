import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "../../redux/posts/posts.thunks";
import {
  selectPosts,
  selectIsPostsLoading,
  selectIsPostsFailed,
} from "../../redux/posts/posts.selectors";
import { Loading } from "../../components/loading/loading.component";
import { Error } from "../../components/error/error.component";
import { cleanPostsState } from "../../redux/posts/posts.actions";

export const ApiPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());

    return () => {
      dispatch(cleanPostsState());
    };
  }, [dispatch]);

  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsPostsLoading);
  const isFailed = useSelector(selectIsPostsFailed);

  if (isLoading) {
    return <Loading />;
  }

  if (isFailed) {
    return <Error />;
  }

  return (
    <table>
      <thead>
        <tr>
          <td>post title</td>
          <td>post author</td>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={`subreddit-post-${post.data.id}`}>
            <td>
              <a
                href={`https://reddit.com/${post.data.permalink}`}
                target="_blank"
              >
                {post.data.title}
              </a>
            </td>
            <td>{post.data.author}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
