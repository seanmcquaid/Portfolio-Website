import React from "react";
import {render} from "@testing-library/react";
import Skills from "./Skills";

describe("<Skills/>", () => {
    it("Matches snapshot", () => {
        const skills = render(<Skills/>);
        expect(skills).toMatchSnapshot();
    });
});