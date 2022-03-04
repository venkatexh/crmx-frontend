import actionTypes from "../../actionTypes";
import Axios from "axios";
import hostHeader from "../../../config/host";

export const fetchNotifications = (orgId) => async (dispatch) => {
  Axios.get(`${hostHeader.url}/api/notifications/organization?org_id=${orgId}`)
    .then((res) => {
      dispatch({ type: actionTypes.FETCH_NOTIFICATIONS, payload: res.data });
    })
    .catch((err) => console.log(err));
};
