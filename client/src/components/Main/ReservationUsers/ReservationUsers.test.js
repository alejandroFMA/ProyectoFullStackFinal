import React from "react";
import { shallow } from "enzyme";
import ReservationUsers from "./ReservationUsers";

describe("ReservationUsers", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ReservationUsers />);
    expect(wrapper).toMatchSnapshot();
  });
});
