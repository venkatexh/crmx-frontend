import Axios from "axios";
import hostHeader from "../../../config/host";
import actionTypes from "../../actionTypes";

export const login = (credentials) => async (dispatch) => {
  Axios.post(`${hostHeader.url}/api/auth/signin`, credentials)
    .then((res) => dispatch({ type: actionTypes.LOGIN, payload: res.data }))
    .catch((err) => {
      console.log(err);
    });
};