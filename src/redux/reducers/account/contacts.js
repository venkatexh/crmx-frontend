export const contacts = (initial = [], action) => {
  switch (action.type) {
    case "SAVE_CONTACTS":
      return action.payload;
    default:
      return initial;
  }
};
