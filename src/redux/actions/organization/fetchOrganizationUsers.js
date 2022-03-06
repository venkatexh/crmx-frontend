import hostHeader from "../../../config/host";
import Axios from "axios";
import actionTypes from "../../actionTypes";

export const fetchOrganizationUsers = (user_id, org_id) => async (dispatch) => {
  Axios.get(
    `${hostHeader.url}/api/organization/users?user_id=${user_id}&org_id=${org_id}`
  ).then((res) => {
    dispatch({ type: actionTypes.FETCH_ORG_USERS, payload: res.data });
  });
};
