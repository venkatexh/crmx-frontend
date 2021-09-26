export const tags = (initial = [], action) => {
  switch (action.type) {
    case "SAVE_TAGS":
      return action.payload;
    default:
      return initial;
  }
};
