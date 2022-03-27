import { shallow } from "enzyme";
import React from "react";
import LeftNav from "../../../components/navigation/LeftNav";
import ReduxTestProvider from "../../../redux/ReduxTestProvider";

it("Left nav component snapshot", () => {
  expect(
    shallow(
      <ReduxTestProvider>
        <LeftNav />
      </ReduxTestProvider>
    )
  ).toMatchSnapshot();
});
