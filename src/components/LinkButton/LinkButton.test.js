import React from "react";
import LinkButton from "./LinkButton";
import {HashRouter as Router} from "react-router-dom";
import { render } from "@testing-library/react";

describe("<LinkButton/>", () => {
    it("Matches snapshot", () => {
        const props = {
            title : "Test Link Button",
            route : "/",
        };
        const linkButton = render(<Router><LinkButton {...props}/></Router>);
        expect(linkButton).toMatchSnapshot();
    });
});