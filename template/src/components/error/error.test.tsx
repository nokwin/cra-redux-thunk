import React from "react";
import renderer from "react-test-renderer";

import { Error } from "./error.component";

describe("Error component", () => {
  it("should render error component", () => {
    const tree = renderer.create(<Error />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
