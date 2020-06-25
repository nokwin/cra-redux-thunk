import { Error } from "./error.component";

describe("Error component", () => {
  it("should render error component", () => {
    expect(Error).toMatchSnapshot();
  });
});
