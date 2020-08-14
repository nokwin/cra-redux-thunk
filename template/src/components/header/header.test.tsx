import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

import { Header } from "./header.component";

describe("Header component", () => {
  it("should render header component", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
