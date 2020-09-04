import React from "react";
import { render, cleanup, act } from "@testing-library/react";
import About from "./About";
import "@testing-library/jest-dom/extend-expect";

describe("<About/>", () => {
  afterEach(cleanup);

  it("Matches snapshot", () => {
    const about = render(<About />);
    expect(about).toMatchSnapshot();
  });
  it("LoadingSpinner is visible on initial load", async () => {
    const { getByTestId } = render(<About />);
    expect(getByTestId("loadingSpinner")).toBeVisible();
  });
  it("About Page Displays after 1.5 seconds", async () => {
    jest.useFakeTimers();
    const { getByTestId } = render(<About />);

    act(() => {
      jest.advanceTimersByTime(1500);
    });

    expect(() => getByTestId("loadingSpinner")).toThrowError();
    expect(getByTestId("aboutPageHeader")).toBeVisible();
  });
});
