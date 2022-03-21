import actionTypes from "../../actionTypes";

export const updateTags = (tags) => {
  return { type: actionTypes.SAVE_TAGS, payload: tags };
};
