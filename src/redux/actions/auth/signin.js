import actionTypes from "../../actionTypes";

export const login = (credentials) => {
  return { type: actionTypes.LOGIN, payload: credentials };
};
