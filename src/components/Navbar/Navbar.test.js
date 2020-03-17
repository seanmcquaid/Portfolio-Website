import React from "react";
import {render} from "@testing-library/react";
import {HashRouter as Router} from "react-router-dom";
import Navbar from "./Navbar";

describe("<Navbar/>", () => {
    it("Matches snapshot", () => {
        const navbar = render(<Router><Navbar/></Router>);
        expect(navbar).toMatchSnapshot();
    });
});