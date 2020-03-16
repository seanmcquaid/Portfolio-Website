import React from "react";
import {render} from "@testing-library/react";
import Layout from "./Layout";
import {HashRouter as Router} from "react-router-dom";

describe("<Layout/>", () => {
    it("Snapshot matches", () => {
        const layout = render(<Router><Layout/></Router>);
        expect(layout).toMatchSnapshot();
    });
});