import hostHeader from "../../../config/host";
import actionTypes from "../../actionTypes";
import Axios from "axios";

export const saveCampaigns = (user_id) => async (dispatch) => {
  Axios.get(`${hostHeader.url}/api/user/${user_id}/campaigns`)
    .then((res) => {
      dispatch({ type: actionTypes.SAVE_CAMPAIGNS, payload: res.data });
    })
    .catch((err) => console.log(err));
};
