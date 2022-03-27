import { shallow } from "enzyme";
import React from "react";
import PlanFeaturesCard from "../../../components/Plan/PlanFeaturesCard";

it("Plan features card component snapshot", () => {
  expect(
    shallow(
      <PlanFeaturesCard
        plan={{
          name: "test plan",
          contacts: "500",
          emails: "10000",
          featuresYes: ["feature1yes", "feature2yes"],
          featuresNo: ["feature1no", "feature2no"],
        }}
      />
    )
  ).toMatchSnapshot();
});
