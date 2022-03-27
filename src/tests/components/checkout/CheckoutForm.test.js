import { shallow } from "enzyme";
import React from "react";
import CheckoutForm from "../../../components/checkout/CheckoutForm";
import ReduxTestProvider from "../../../redux/ReduxTestProvider";

it("Checkout form component snapshot", () => {
  expect(
    shallow(
      <ReduxTestProvider>
        <CheckoutForm />
      </ReduxTestProvider>
    )
  ).toMatchSnapshot();
});
