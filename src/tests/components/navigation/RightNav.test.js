import { shallow } from "enzyme";
import React from "react";
import RightNav from "../../../components/navigation/RightNav";
import ReduxTestProvider from "../../../redux/ReduxTestProvider";

it("Right nav component snapshot", () => {
  expect(
    shallow(
      <ReduxTestProvider>
        <RightNav />
      </ReduxTestProvider>
    )
  ).toMatchSnapshot();
});
