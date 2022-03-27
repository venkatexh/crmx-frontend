import { shallow } from "enzyme";
import React from "react";
import NewContact from "../../../components/modals/NewContact";
import ReduxTestProvider from "../../../redux/ReduxTestProvider";

it("should be new component snapshot", () => {
  expect(
    shallow(
      <ReduxTestProvider>
        <NewContact />
      </ReduxTestProvider>
    )
  ).toMatchSnapshot();
});
