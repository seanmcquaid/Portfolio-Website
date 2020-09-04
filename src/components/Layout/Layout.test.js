import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Layout from "./Layout";
import { HashRouter as Router } from "react-router-dom";

describe("<Layout/>", () => {
  it("Snapshot matches", () => {
    const children = "Children are here!";
    const layout = render(
      <Router>
        <Layout children={children} />
      </Router>
    );
    expect(layout).toMatchSnapshot();
  });
});
