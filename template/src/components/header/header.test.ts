import { Header } from "./header.component";

describe("Header component", () => {
  it("should render header component", () => {
    expect(Header).toMatchSnapshot();
  });
});
