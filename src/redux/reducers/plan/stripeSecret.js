export const stripeSecret = (initial = null, action) => {
  switch (action.type) {
    case "SAVE_STRIPE_SECRET":
      return action.payload;
    default:
      return initial;
  }
}