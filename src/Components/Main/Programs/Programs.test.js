import React from "react";
import { shallow } from "enzyme";
import Programs from "./Programs";

describe("Programs", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Programs />);
    expect(wrapper).toMatchSnapshot();
  });
});
