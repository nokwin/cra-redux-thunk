import { ApiPage } from "./api-page.component";

describe("Api page component", () => {
  it("should render api page component", () => {
    expect(ApiPage).toMatchSnapshot();
  });
});
