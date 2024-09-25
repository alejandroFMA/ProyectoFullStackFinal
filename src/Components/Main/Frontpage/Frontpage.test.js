import React from "react";
import { shallow } from "enzyme";
import Frontpage from "./Frontpage";

describe("Frontpage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Frontpage />);
    expect(wrapper).toMatchSnapshot();
  });
});
