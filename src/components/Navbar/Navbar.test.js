import React from "react";
import {render, fireEvent} from "@testing-library/react";
import {HashRouter as Router} from "react-router-dom";
import Navbar from "./Navbar";
import "@testing-library/jest-dom/extend-expect";

describe("<Navbar/>", () => {
    it("Matches snapshot", () => {
        const navbar = render(<Router><Navbar/></Router>);
        expect(navbar).toMatchSnapshot();
    });
});