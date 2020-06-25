import React from "react";
import renderer from "react-test-renderer";

import { Loading } from "./loading.component";

describe("Loading component", () => {
  it("should render loading component", () => {
    const tree = renderer.create(<Loading />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
