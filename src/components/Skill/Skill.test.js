import React from "react";
import { render } from "@testing-library/react";
import Skill from "./Skill";
import { FaAccessibleIcon } from "react-icons/fa";

describe("<Skill/>", () => {
  it("Matches snapshot", () => {
    const props = {
      IconComponent: FaAccessibleIcon,
      name: "Placeholder Name",
    };
    const skill = render(<Skill {...props} />);
    expect(skill).toMatchSnapshot();
  });
});
