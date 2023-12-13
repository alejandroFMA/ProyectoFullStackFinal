import React from "react";
import { shallow } from "enzyme";
import RestaurantList from "./RestaurantList";

describe("RestaurantList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<RestaurantList />);
    expect(wrapper).toMatchSnapshot();
  });
});
