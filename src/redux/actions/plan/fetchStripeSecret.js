import Axios from "axios";
import hostHeader from "../../../config/host";
import actionTypes from "../../actionTypes";

export const fetchStripeSecret = (price) => async dispatch => {
  Axios.post(`${hostHeader.url}/api/create-payment-intent`, {amount: 99})
    .then(res => {
      dispatch({type: actionTypes.SAVE_STRIPE_SECRET, payload: res.data.clientSecret})
    });
}