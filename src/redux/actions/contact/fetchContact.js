import actionTypes from "../../actionTypes";
import Axios from "axios";
import hostHeader from "../../../config/host";

export const fetchContact = (id) => async (dispatch) => {
  Axios.get(`${hostHeader.url}/api/contact/${id}`)
    .then((res) => {
      dispatch({type: actionTypes.FETCH_CONTACT, payload: res.data});
    })
    .catch((err) => console.log(err));
};