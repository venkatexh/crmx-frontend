import { shallow } from "enzyme";
import React from "react";
import Tag from "../../../components/home/tags/Tag";
import TagsContainer from "../../../components/home/tags/TagsContainer";
import TagsHeader from "../../../components/home/tags/TagsHeader";
import ReduxTestProvider from "../../../redux/ReduxTestProvider";

it("should be tag component snapshot", () => {
  expect(
    shallow(
      <ReduxTestProvider>
        <Tag />
      </ReduxTestProvider>
    )
  ).toMatchSnapshot();
});

it("should be tags container component snapshot", () => {
  expect(
    shallow(
      <ReduxTestProvider>
        <TagsContainer />
      </ReduxTestProvider>
    )
  ).toMatchSnapshot();
});

it("should be tags header component snapshot", () => {
  expect(
    shallow(
      <ReduxTestProvider>
        <TagsHeader />
      </ReduxTestProvider>
    )
  ).toMatchSnapshot();
});
