import {PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {useSelector} from "react-redux";

const CheckoutForm = () => {
  const state = useSelector(({loggedUser}) => ({loggedUser}));
  const {firstName, lastName, email, billing_address} = state.loggedUser;
  const stripe = useStripe();
  const elements = useElements();
  const options = {
    wallets: {
      googlePay: 'auto'
    },
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment-success-redirect",
        payment_method_data: {
          billing_details: {
            name: `${firstName} ${lastName}`,
            email,
            address: billing_address
          }
        }
      },
    });
    if (result.error) {
      console.log(result.error.message);
    } else {
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement options={options}/>
      <button disabled={!stripe} className={'payButton'}>Pay Now</button>
    </form>
  );
}

export default CheckoutForm;