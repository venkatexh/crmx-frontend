import actionTypes from "../../actionTypes";
import Axios from "axios";
import hostHeader from "../../../config/host";

export const fetchNotifications = (user_id, org_id) => async (dispatch) => {
  Axios.get(
    `${hostHeader.url}/api/notifications/organization?org_id=${org_id}&user_id=${user_id}`
  )
    .then((res) => {
      dispatch({ type: actionTypes.FETCH_NOTIFICATIONS, payload: res.data });
    })
    .catch((err) => console.log(err));
};
