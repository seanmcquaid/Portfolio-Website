import React from "react";
import {render} from "@testing-library/react";
import Projects from "./Projects";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom/extend-expect";

describe("<Projects/>", () => {
    it("Matches snapshot", () => {
        const projects = render(<Projects/>);
        expect(projects).toMatchSnapshot();
    });
    it("LoadingSpinner is visible on initial load", async () => {
        const {getByTestId} = render(<Projects/>);
        expect(getByTestId("loadingSpinner")).toBeVisible();
    });
    it("Projects Page Displays after 1.5 seconds", async () => {
        jest.useFakeTimers();
        const {rerender, getByTestId} = render(<Projects/>);
        act(() => {
            rerender(<Projects/>);
            jest.advanceTimersByTime(1500);
        });
        expect(() => getByTestId("loadingSpinner")).toThrowError();
        expect(getByTestId("projectsPageHeader")).toBeVisible();
    });
});