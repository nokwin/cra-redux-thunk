import { FormsPage } from "./forms-page.component";

describe("Forms page component", () => {
  it("should render forms page component", () => {
    expect(FormsPage).toMatchSnapshot();
  });
});
