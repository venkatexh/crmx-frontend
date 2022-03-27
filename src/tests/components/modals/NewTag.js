import { shallow } from "enzyme";
import React from "react";
import NewTag from "../../../components/modals/NewTag";

it("should be new tag component snapshot", () => {
  expect(shallow(<NewTag />)).toMatchSnapshot();
});
