export const campaigns = (initial = [], action) => {
  switch (action.type) {
    case "SAVE_CAMPAIGNS":
      return action.payload;
    default:
      return initial;
  }
};
