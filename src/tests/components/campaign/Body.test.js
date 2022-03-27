import { shallow } from "enzyme";
import React from "react";
import Body from "../../../components/Campaign/Body";

it("Campaign body component snapshot", () => {
  expect(
    shallow(
      <Body
        campaign={{
          subject: "test subject",
          text: "this is an email text",
          tags: ["test tag 1", "test tag 2"],
        }}
      />
    )
  ).toMatchSnapshot();
});
