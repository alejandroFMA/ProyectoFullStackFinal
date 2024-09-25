import React from "react";
import { shallow } from "enzyme";
import Proyections from "./Proyections";

describe("Proyections", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Proyections />);
    expect(wrapper).toMatchSnapshot();
  });
});
