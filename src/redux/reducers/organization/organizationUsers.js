export const organizationUsers = (initial = [], action) => {
  switch (action.type) {
    case "FETCH_ORG_USERS":
      return action.payload;
    default:
      return initial;
  }
};
