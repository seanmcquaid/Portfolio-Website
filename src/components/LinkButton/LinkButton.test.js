import React from "react";
import LinkButton from "./LinkButton";
import {HashRouter as Router} from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("<LinkButton/>", () => {
    it("Matches snapshot", () => {
        const props = {
            title : "Test Link Button",
            route : "/",
        };
        const linkButton = render(<Router><LinkButton {...props}/></Router>);
        expect(linkButton).toMatchSnapshot();
    });
    it("Title displays properly", () => {
        const props = {
            title : "Test Link Button",
            route : "/",
        };
        const {title} = props;
        const {queryByText} = render(<Router><LinkButton {...props}/></Router>);
        expect(queryByText(title)).toHaveTextContent(title);
    });
    it("Passed route is correct", () => {
        // look up how to test routes passed to link components
    });
});