import { App } from "./App";

describe("App component", () => {
  it("should render app component", () => {
    expect(App).toMatchSnapshot();
  });
});
