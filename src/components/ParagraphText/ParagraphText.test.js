import React from "react";
import { render } from "@testing-library/react";
import ParagraphText from "./ParagraphText";

describe("<ParagraphText/>", () => {
  it("Matches snapshot", () => {
    const paragraphText = render(<ParagraphText />);
    expect(paragraphText).toMatchSnapshot();
  });
});
