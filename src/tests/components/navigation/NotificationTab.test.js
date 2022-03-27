import { shallow } from "enzyme";
import React from "react";
import NotificationTab from "../../../components/navigation/NotificationTab";
import ReduxTestProvider from "../../../redux/ReduxTestProvider";

it("Campaign body component snapshot", () => {
  expect(
    shallow(
      <ReduxTestProvider>
        <NotificationTab />
      </ReduxTestProvider>
    )
  ).toMatchSnapshot();
});
