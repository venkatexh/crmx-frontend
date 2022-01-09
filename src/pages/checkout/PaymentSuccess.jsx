import {useEffect} from "react";
import hostHeader from "../../config/host";
import {useSelector} from "react-redux";
import Axios from "axios";
import {useHistory} from "react-router";

const PaymentSuccess = (props) => {
  const history = useHistory();
  const state = useSelector(({loggedUser, selectedPlan}) => ({loggedUser, selectedPlan}));
  const {name, price, rate} = state.selectedPlan;
  const query = new URLSearchParams(props.location.search);
  useEffect(() => {
    Axios.post(`${hostHeader.url}/api/user/change-plan?user_id=${state.loggedUser.id}`, {
      plan: {
        name,
        amount: price,
        rate
      },
      bill: {
        type: "plan upgrade",
        paymentMethod: 'card',
        plan: name,
        amount: price,
        payment_intent: query.get('payment_intent'),
      }
    }).then(res => {
      if (res.status === 200) {
        
        history.push('/account')
      }
    });
  });
  return (
    <div className={''}>
      <div className={''}>Please wait while we confirm your order...</div>
      <img src={'/loaders/comp_loader.gif'} alt={'loader'}/>
    </div>
  );
}

export default PaymentSuccess;