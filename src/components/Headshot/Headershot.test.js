import React from "react";
import { render } from "@testing-library/react";
import Headshot from "./Headshot";

describe("<Headshot/>", () => {
  it("Snapshot matches", () => {
    const headShot = render(<Headshot />);
    expect(headShot).toMatchSnapshot();
  });
});
