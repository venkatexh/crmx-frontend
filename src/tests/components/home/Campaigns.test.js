import { shallow } from "enzyme";
import React from "react";
import Campaign from "../../../components/home/campaigns/Campaign";
import CampaignContainer from "../../../components/home/campaigns/CampaignContainer";
import CampaignHeader from "../../../components/home/campaigns/CampaignHeader";
import ReduxTestProvider from "../../../redux/ReduxTestProvider";

it("should be campaigns container component snapshot", () => {
  expect(
    shallow(
      <ReduxTestProvider>
        <Campaign
          name={"test campaign"}
          status={"sent"}
          sentAt={"today"}
          scheduledAt={"tomorrow"}
          sentTo={["email1@gmail.com", "email2@gmail.com"]}
          id={"testid1234"}
        />
      </ReduxTestProvider>
    )
  ).toMatchSnapshot();
});

it("should be campaigns container component snapshot", () => {
  expect(
    shallow(
      <ReduxTestProvider>
        <CampaignContainer />
      </ReduxTestProvider>
    )
  ).toMatchSnapshot();
});

it("should be campaigns header component snapshot", () => {
  expect(
    shallow(
      <ReduxTestProvider>
        <CampaignHeader />
      </ReduxTestProvider>
    )
  ).toMatchSnapshot();
});
