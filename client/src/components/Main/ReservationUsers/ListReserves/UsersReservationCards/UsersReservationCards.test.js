import React from "react";
import { shallow } from "enzyme";
import UsersReservationCards from "./UsersReservationCards";

describe("UsersReservationCards", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UsersReservationCards />);
    expect(wrapper).toMatchSnapshot();
  });
});
