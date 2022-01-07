import {useSelector} from "react-redux";
import '../../sass/pages/checkout.page.scss';
import StripeCheckout from "react-stripe-checkout";
import hostHeader from "../../config/host";
import {useHistory} from "react-router";
import Axios from "axios";

const Checkout = () => {
  const state = useSelector(({selectedPlan, currentPlan, loggedUser}) => ({selectedPlan, currentPlan, loggedUser}));
  const stripePrice = state.selectedPlan.price * 100;
  const {currentPlan, selectedPlan} = state;
  const history = useHistory();
  const onToken = (token) => {
    console.log(token)
    Axios.post(`${hostHeader.url}/api/user/change-plan?user_id=${state.loggedUser.id}`, {
      plan: selectedPlan.name,
      bill: {
        type: 'home upgrade',
        paymentMethod: 'card',
        amount: selectedPlan.price,
        payeeEmail: state.loggedUser.email
      }
    }).then(res => {
      if (res.status === 200) {
        history.push('/user-plans')
      }
    });
  }

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
        <div className={'payButtonContainer'}>
          <StripeCheckout token={onToken}
                          stripeKey={process.env.REACT_APP_STRIPE_SITE_KEY}
                          email={state.loggedUser.email} panelLabel={'Pay Now'} amount={stripePrice}
                          name={`${selectedPlan.name} Plan`}
                          description={'CRMX'}/>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Checkout;