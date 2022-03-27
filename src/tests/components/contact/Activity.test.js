import { shallow } from "enzyme";
import React from "react";
import Activity from "../../../components/Contact/Activity";

it("Contact activity component snapshot", () => {
  expect(
    shallow(
      <Activity
        activity={{
          type: "test type",
          text: "updated",
          doneAt: "12 PM",
          refId: "testid123",
          campaignName: "test campaign",
        }}
      />
    )
  ).toMatchSnapshot();
});
