import React from "react";
import { shallow } from "enzyme";
import Newsfeed from "./Newsfeed";

describe("Newsfeed", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Newsfeed />);
    expect(wrapper).toMatchSnapshot();
  });
});
