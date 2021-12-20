import actionTypes from "../../actionTypes";
import Axios from "axios";

export const saveCampaigns = (user_id) => async (dispatch) => {
  Axios.get(`/api/user/${user_id}/campaigns`)
    .then((res) => {
      dispatch({ type: actionTypes.SAVE_CAMPAIGNS, payload: res.data });
    })
    .catch((err) => console.log(err));
};
