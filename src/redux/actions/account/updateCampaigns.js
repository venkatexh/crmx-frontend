import actionTypes from "../../actionTypes";

export const updateCampaigns = (campaigns) => {
  return { type: actionTypes.SAVE_CAMPAIGNS, payload: campaigns };
};
