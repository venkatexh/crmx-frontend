import { shallow } from "enzyme";
import React from "react";
import Profile from "../../../components/profile/Profile";
import ReduxTestProvider from "../../../redux/ReduxTestProvider";

it("Profile component snapshot", () => {
  expect(
    shallow(
      <ReduxTestProvider>
        <Profile />
      </ReduxTestProvider>
    )
  ).toMatchSnapshot();
});
