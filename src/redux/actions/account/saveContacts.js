import Axios from "axios";
import actionTypes from "../../actionTypes";

export const saveContacts = (user_id) => async (dispatch) => {
  Axios.get(`/api/user/${user_id}/contacts`)
    .then((res) => {
      dispatch({ type: actionTypes.SAVE_CONTACTS, payload: res.data });
    })
    .catch((err) => console.log(err));
};
