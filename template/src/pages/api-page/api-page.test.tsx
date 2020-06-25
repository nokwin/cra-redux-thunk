import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import { mount, shallow } from "enzyme";

import { ApiPage } from "./api-page.component";
import { thunkMiddleware } from "../../redux/store";
import {
  fetchPostsStarted,
  cleanPostsState,
} from "../../redux/posts/posts.actions";
import { mockedRedditData } from "./api-page.test-helper";

const mockStore = configureStore([thunkMiddleware]);
const defaultStore = mockStore({
  posts: {
    list: [],
  },
});

describe("ApiPage component", () => {
  const wrapWithProvider = (
    component: React.ReactElement,
    store = defaultStore
  ): [React.ReactElement, MockStoreEnhanced<unknown, {}>] => [
    <Provider store={store}>{component}</Provider>,
    store,
  ];

  beforeEach(() => {
    defaultStore.clearActions();
  });

  it("should render ApiPage component", () => {
    const [wrapped] = wrapWithProvider(<ApiPage />);
    const tree = renderer.create(wrapped).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Should trigger fetchPosts on useEffect", () => {
    const [wrapped, store] = wrapWithProvider(<ApiPage />);
    mount(wrapped);

    expect(store.getActions()).toEqual([fetchPostsStarted()]);
  });

  it("Should trigger cleanPostsState on useEffect unmount", () => {
    const [wrapped, store] = wrapWithProvider(<ApiPage />);
    const component = mount(wrapped);

    component.unmount();

    expect(store.getActions()).toEqual([
      fetchPostsStarted(),
      cleanPostsState(),
    ]);
  });

  it("Should return loading component if isLoading = true", () => {
    const [wrapped, store] = wrapWithProvider(
      <ApiPage />,
      mockStore({
        posts: {
          list: [],
          isLoading: true,
        },
      })
    );

    const tree = renderer.create(wrapped).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Should return error component if isError = true", () => {
    const [wrapped, store] = wrapWithProvider(
      <ApiPage />,
      mockStore({
        posts: {
          list: [],
          isFailed: true,
        },
      })
    );

    const tree = renderer.create(wrapped).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Should return rendered list of posts", () => {
    const [wrapped, store] = wrapWithProvider(
      <ApiPage />,
      mockStore({
        posts: {
          list: mockedRedditData,
        },
      })
    );

    const tree = renderer.create(wrapped).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
