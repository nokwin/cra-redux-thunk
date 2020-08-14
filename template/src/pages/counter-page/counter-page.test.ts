import { CounterPage } from "./counter-page.component";

describe("Counter page component", () => {
  it("should render counter page component", () => {
    expect(CounterPage).toMatchSnapshot();
  });
});
