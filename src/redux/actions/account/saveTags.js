import Axios from "axios";
import hostHeader from "../../../config/host";
import actionTypes from "../../actionTypes";

export const saveTags = (user_id) => async (dispatch) => {
  Axios.get(`${hostHeader.url}/api/user/${user_id}/tags`)
    .then((res) => {
      dispatch({ type: actionTypes.SAVE_TAGS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
