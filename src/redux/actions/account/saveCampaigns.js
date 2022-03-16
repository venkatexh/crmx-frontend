import actionTypes from "../../actionTypes";
import Axios from "axios";
import hostHeader from "../../../config/host";

export const saveCampaigns = (user_id, org_id) => async (dispatch) => {
  Axios.get(
    `${hostHeader.url}/api/user/campaigns?user_id=${user_id}&org_id=${org_id}`
  )
    .then((res) => {
      dispatch({ type: actionTypes.SAVE_CAMPAIGNS, payload: res.data });
    })
    .catch((err) => console.log(err));
};
