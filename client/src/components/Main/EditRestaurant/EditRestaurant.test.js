import React from "react";
import { shallow } from "enzyme";
import EditRestaurant from "./EditRestaurant";

describe("EditRestaurant", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<EditRestaurant />);
    expect(wrapper).toMatchSnapshot();
  });
});
