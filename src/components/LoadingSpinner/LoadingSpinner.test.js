import React from "react";
import { render } from "@testing-library/react";
import LoadingSpinner from "./LoadingSpinner";

describe("<LoadingSpinner/>", () => {
  it("Matches snapshot", () => {
    const loadingSpinner = render(<LoadingSpinner isLoading />);
    expect(loadingSpinner).toMatchSnapshot();
  });
});
