import React from "react";
import { shallow } from "enzyme";
import ReservationCard from "./ReservationCard";

describe("ReservationCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ReservationCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
