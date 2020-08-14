import { HomePage } from "./homepage.component";

describe("Homepage component", () => {
  it("should render homepage component", () => {
    expect(HomePage).toMatchSnapshot();
  });
});
