import Axios from "axios";
import actionTypes from "../../actionTypes";
import hostHeader from "../../../config/host";

export const saveContacts = (user_id, org_id) => async (dispatch) => {
  Axios.get(
    `${hostHeader.url}/api/user/contacts?org_id=${org_id}&user_id=${user_id}`
  )
    .then((res) => {
      dispatch({ type: actionTypes.SAVE_CONTACTS, payload: res.data });
    })
    .catch((err) => console.log(err));
};
