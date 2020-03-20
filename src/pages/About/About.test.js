import React from "react";
import {render, cleanup, waitForElementToBeRemoved} from "@testing-library/react";
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
    it("LoadingSpinner isn't visible after initial loading is done", async () => {
        jest.useFakeTimers();
        const {rerender, getByTestId} = render(<About/>);
        act(() => {
            rerender(<About/>);
            jest.advanceTimersByTime(1500);
        });
        expect(getByTestId("aboutPage")).toBeVisible();
    });
});