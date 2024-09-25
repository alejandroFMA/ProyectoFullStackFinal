import React from "react";
import { shallow } from "enzyme";
import RestaurantDetail from "./RestaurantDetail";

describe("RestaurantDetail", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<RestaurantDetail />);
    expect(wrapper).toMatchSnapshot();
  });
});
