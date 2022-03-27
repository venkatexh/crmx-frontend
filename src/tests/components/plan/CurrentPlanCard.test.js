import { shallow } from "enzyme";
import React from "react";
import CurrentPlanCard from "../../../components/Plan/CurrentPlanCard";
import ReduxTestProvider from "../../../redux/ReduxTestProvider";

it("Current plan card component snapshot", () => {
  expect(
    shallow(
      <ReduxTestProvider>
        <CurrentPlanCard />
      </ReduxTestProvider>
    )
  ).toMatchSnapshot();
});
