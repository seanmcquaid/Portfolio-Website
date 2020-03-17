import React from "react";
import {render} from "@testing-library/react";
import Projects from "./Projects";

describe("<Projects/>", () => {
    it("Matches snapshot", () => {
        const projects = render(<Projects/>);
        expect(projects).toMatchSnapshot();
    });
});