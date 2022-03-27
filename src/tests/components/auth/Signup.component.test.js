import { shallow } from "enzyme";
import React from "react";
import SignupComponent from "../../../components/auth/Signup.component";

it("Signup component snapshot", () => {
  expect(shallow(<SignupComponent />)).toMatchSnapshot();
});
