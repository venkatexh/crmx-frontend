import { shallow } from "enzyme";
import React from "react";
import UserTab from "../../../components/navigation/UserTab";

it("User tab component snapshot", () => {
  expect(shallow(<UserTab />)).toMatchSnapshot();
});
