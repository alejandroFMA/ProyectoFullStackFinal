import React from "react";
import { shallow } from "enzyme";
import Comments from "./Comments";

describe("Comments", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Comments />);
    expect(wrapper).toMatchSnapshot();
  });
});
