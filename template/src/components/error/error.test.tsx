import React from "react";
import { shallow } from "enzyme";

import { Error } from "./error.component";

describe("Error component", () => {
  const container = shallow(<Error />);

  it("should render error component", () => {
    expect(container.html()).toMatchSnapshot();
  });
});
