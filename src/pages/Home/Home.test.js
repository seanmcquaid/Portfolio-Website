import React from "react";
import {render, cleanup, fireEvent, act, waitFor} from "@testing-library/react";
import {HashRouter as Router, Route} from "react-router-dom";
import {Home, Contact} from "pages/pages";
import "@testing-library/jest-dom/extend-expect";

const renderRoutes = () => (
    render(
        <Router>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contact" component={Contact}/>
        </Router>
    )
);

describe("<Home/>", () => {

    afterEach(cleanup);
    it("Matches snapshot", () => {
        const home = render(<Router><Home/></Router>);
        expect(home).toMatchSnapshot();
    });

    it("Contact Me Button takes me to the Contact Page", async () => {
        jest.useFakeTimers();

        const {getByTestId} = renderRoutes();

        fireEvent.click(getByTestId("Contact MeLinkButton"));
    
        act(() => {
            jest.advanceTimersByTime(1600);
        });

        await waitFor(() => expect(() => getByTestId("loadingSpinner")).toThrowError());

        expect(getByTestId("contactPageHeader")).toBeVisible();
    });
});