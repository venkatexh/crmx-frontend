import actionTypes from "../../actionTypes";

export const saveSelectedPlan = (plan) => {
  console.log(plan)
  return {type: actionTypes.SAVE_SELECTED_PLAN, payload: plan}
}