import React from "react";
import { shallow } from "enzyme";
import Reservations from "./Reservations";

describe("Reservations", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Reservations />);
    expect(wrapper).toMatchSnapshot();
  });
});
