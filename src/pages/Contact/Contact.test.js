import React from "react";
import {render, act, cleanup} from "@testing-library/react";
import Contact from "./Contact";
import "@testing-library/jest-dom/extend-expect";

describe("<Contact/>", () => {

    afterEach(cleanup);
    it("Matches snapshot", () => {
        const contact = render(<Contact/>);
        expect(contact).toMatchSnapshot();
    });
    it("LoadingSpinner is visible on initial load", async () => {
        const {getByTestId} = render(<Contact/>);
        expect(getByTestId("loadingSpinner")).toBeVisible();
    });
    it("Contact Page Displays after 1.5 seconds", async () => {
        jest.useFakeTimers();

        const {getByTestId} = render(<Contact/>);

        act(() => {
            jest.advanceTimersByTime(1500);
        });

        expect(() => getByTestId("loadingSpinner")).toThrowError();
        expect(getByTestId("contactPageHeader")).toBeVisible();
    });
});