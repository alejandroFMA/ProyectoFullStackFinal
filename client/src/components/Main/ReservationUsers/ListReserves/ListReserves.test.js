import React from "react";
import { shallow } from "enzyme";
import ListReserves from "./ListReserves";

describe("ListReserves", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListReserves />);
    expect(wrapper).toMatchSnapshot();
  });
});
