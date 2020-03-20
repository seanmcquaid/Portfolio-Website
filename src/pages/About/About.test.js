import React from "react";
import {render, cleanup} from "@testing-library/react";
import About from "./About";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";

describe("<About/>", () => {
    afterEach(cleanup);

    it("Matches snapshot", () => {
        const about = render(<About/>);
        expect(about).toMatchSnapshot();
    });
    it("LoadingSpinner is visible on initial load", async () => {
        const {getByTestId} = render(<About/>);
        expect(getByTestId("loadingSpinner")).toBeVisible();
    });
    it("About Page Displays after 1.5 seconds", async () => {
        jest.useFakeTimers();
        const {rerender, getByTestId} = render(<About/>);
        act(() => {
            rerender(<About/>);
            jest.advanceTimersByTime(1500);
        });
        expect(() => getByTestId("loadingSpinner")).toThrowError();
        expect(getByTestId("aboutPageHeader")).toBeVisible();
    });
});