import Axios from "axios";
import actionTypes from "../../actionTypes";
import hostHeader from "../../../config/host";

export const saveTags = (user_id, org_id) => async (dispatch) => {
  Axios.get(
    `${hostHeader.url}/api/user/tags?user_id=${user_id}&org_id=${org_id}`
  )
    .then((res) => {
      dispatch({ type: actionTypes.SAVE_TAGS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
