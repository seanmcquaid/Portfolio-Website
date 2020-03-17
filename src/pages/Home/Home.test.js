import React from "react";
import {render} from "@testing-library/react";
import {HashRouter as Router} from "react-router-dom";
import Home from "./Home";

describe("<Home/>", () => {
    it("Matches snapshot", () => {
        const home = render(<Router><Home/></Router>);
        expect(home).toMatchSnapshot();
    });
});