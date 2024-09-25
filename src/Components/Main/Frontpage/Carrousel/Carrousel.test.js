import React from "react";
import { shallow } from "enzyme";
import Carrousel from "./Carrousel";

describe("Carrousel", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Carrousel />);
    expect(wrapper).toMatchSnapshot();
  });
});
