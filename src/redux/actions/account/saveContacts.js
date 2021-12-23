import Axios from "axios";
import actionTypes from "../../actionTypes";
import hostHeader from "../../../config/host";

export const saveContacts = (user_id) => async (dispatch) => {
  Axios.get(`${hostHeader.url}/api/user/${user_id}/contacts`)
    .then((res) => {
      dispatch({ type: actionTypes.SAVE_CONTACTS, payload: res.data });
    })
    .catch((err) => console.log(err));
};
