export const selectedPlan = (initial = null, action) => {
  switch (action.type) {
    case "SAVE_SELECTED_PLAN":
      return action.payload;
    default:
      return initial;
  }
}