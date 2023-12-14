import React from "react";
import { shallow } from "enzyme";
import FormReserve from "./FormReserve";

describe("FormReserve", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FormReserve />);
    expect(wrapper).toMatchSnapshot();
  });
});
