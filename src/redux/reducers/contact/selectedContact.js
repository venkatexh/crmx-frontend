export const selectedContact = (initial = {}, action) => {
  switch (action.type) {
    case "FETCH_CONTACT":
      return action.payload;
    case "UPDATE_CONTACT":
      return action.payload;
    default:
      return initial;
  }
}