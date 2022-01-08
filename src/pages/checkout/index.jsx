import {useSelector} from "react-redux";
import '../../sass/pages/checkout.page.scss';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from "../../components/checkout/CheckoutForm";
import {loadStripe} from "@stripe/stripe-js";

const Checkout = () => {
  const state = useSelector(({selectedPlan, currentPlan, loggedUser, stripeSecret}) => ({
    selectedPlan,
    currentPlan,
    loggedUser,
    stripeSecret
  }));
  const {currentPlan, selectedPlan} = state;

  const appearance = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#0570de',
      colorBackground: '#ffffff',
      colorText: '#30313d',
      colorDanger: '#df1b41',
      fontFamily: 'Ideal Sans, system-ui, sans-serif',
      spacingUnit: '4px',
      borderRadius: '4px',
    },
  }

  const options = {
    clientSecret: state.stripeSecret,
    appearance,
    
  };

  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_SITE_KEY);

  return (
    <div className={'checkoutPage'}>
      <div className={'checkoutSummary'}>
        <div className={'summaryTop'}>Complete Purchase</div>
        {/*<div>*/}
        {/*  <div>Current Plan</div>*/}
        {/*  <div>{state.currentPlan.name}</div>*/}
        {/*  <div>{currentPlan.price}</div>*/}
        {/*  /!*<div>{currentPlan.rate}</div>*!/*/}
        {/*</div>*/}
        <div className={'selectedPlan'}>
          <div className={'planRow'}>
            <div>Selected Plan</div>
            <div className={'rightText'}>{state.selectedPlan.name}</div>
          </div>
          <div className={'planRow'}>
            <div>Per Month</div>
            <div className={'rightText'}>{selectedPlan.price}</div>
          </div>
        </div>
        <div className={'selectedPlan'}>
          <div className={'planRow'}>
            <div>Total</div>
            <div className={'rightText'}>{state.selectedPlan.price}</div>
          </div>
          <hr/>
        </div>
      </div>
      {
        state.stripeSecret === null ?
          <div className={'paymentLoader'}>
            <img src={'/loaders/comp_loader.gif'} alt={'loader'} className={'loaderImg'}/>
          </div>
          :
          <div className={'paymentContainer'}>
            <Elements stripe={stripePromise} options={options}>
              <CheckoutForm/>
            </Elements>
          </div>
      }
    </div>
  );
}

export default Checkout;