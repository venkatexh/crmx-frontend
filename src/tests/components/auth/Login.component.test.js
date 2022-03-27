import { shallow } from "enzyme";
import React from "react";
import LoginComponent from "../../../components/auth/Login.component";

it("Login component snapshot", () => {
  expect(shallow(<LoginComponent />)).toMatchSnapshot();
});
