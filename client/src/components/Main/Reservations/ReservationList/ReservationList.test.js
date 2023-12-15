import React from "react";
import { shallow } from "enzyme";
import ReservationList from "./ReservationList";

describe("ReservationList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ReservationList />);
    expect(wrapper).toMatchSnapshot();
  });
});
