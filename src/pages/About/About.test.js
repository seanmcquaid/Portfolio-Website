import React from "react";
import {render} from "@testing-library/react";
import About from "./About";

describe("<About/>", () => {
    it("Matches snapshot", () => {
        const about = render(<About/>);
        expect(about).toMatchSnapshot();
    });
});