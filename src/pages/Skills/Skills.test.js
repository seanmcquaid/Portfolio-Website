import React from "react";
import { render, act, cleanup } from "@testing-library/react";
import Skills from "./Skills";
import "@testing-library/jest-dom/extend-expect";

describe("<Skills/>", () => {
  afterEach(cleanup);
  it("Matches snapshot", () => {
    const skills = render(<Skills />);
    expect(skills).toMatchSnapshot();
  });
  it("LoadingSpinner is visible on initial load", async () => {
    const { getByTestId } = render(<Skills />);
    expect(getByTestId("loadingSpinner")).toBeVisible();
  });
  it("Skills Page Displays after 1.5 seconds", async () => {
    jest.useFakeTimers();

    const { getByTestId } = render(<Skills />);

    act(() => {
      jest.advanceTimersByTime(1500);
    });

    expect(() => getByTestId("loadingSpinner")).toThrowError();
    expect(getByTestId("skillsPageHeader")).toBeVisible();
  });
});
