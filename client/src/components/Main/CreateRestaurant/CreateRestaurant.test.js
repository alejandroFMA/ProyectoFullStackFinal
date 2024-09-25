import React from "react";
import { shallow } from "enzyme";
import CreateRestaurant from "./CreateRestaurant";

describe("CreateRestaurant", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CreateRestaurant />);
    expect(wrapper).toMatchSnapshot();
  });
});
