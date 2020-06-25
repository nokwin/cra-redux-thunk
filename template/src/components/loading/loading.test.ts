import { Loading } from "./loading.component";

describe("Loading component", () => {
  it("should render loading component", () => {
    expect(Loading).toMatchSnapshot();
  });
});
