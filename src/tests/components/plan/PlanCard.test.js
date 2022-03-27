import { shallow } from "enzyme";
import React from "react";
import PlanCard from "../../../components/Plan/PlanCard";
import ReduxTestProvider from "../../../redux/ReduxTestProvider";

it("Plan card component snapshot", () => {
  expect(
    shallow(
      <ReduxTestProvider>
        <PlanCard
          name={"test card"}
          userPlan={"test plan"}
          description={"test description"}
          price={"99"}
          rate={"per month"}
          idx={"1234test"}
          selected={"1234test"}
          features={"this is a feature"}
        />
      </ReduxTestProvider>
    )
  ).toMatchSnapshot();
});
