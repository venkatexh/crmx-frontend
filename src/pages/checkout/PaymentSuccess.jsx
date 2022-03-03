import {useEffect, useState} from "react";
import hostHeader from "../../config/host";
import {useSelector} from "react-redux";
import Axios from "axios";
import {useHistory} from "react-router";
import "../../sass/pages/paymentSuccess.page.scss";

const PaymentSuccess = (props) => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
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
        sessionStorage.setItem("loggedUser", JSON.stringify(res.data.user));
        setTimeout(() => {
          history.push('/home')
        }, 3000);
        setLoading(false);
      }
    });
  });

  return (
    <div className={'paymentSuccess'}>
      {
        loading ?
          <div className={'loadingDiv'}>
            <img src={'/loaders/comp_loader.gif'} alt={'loader'} className={'loaderImg'}/>
            <div className={'text'}>Please wait while we confirm your order...</div>
          </div> :
          <div className={'loadingDiv'}>
            <div>Plan upgraded! You will be redirected soon...</div>
          </div>
      }
    </div>
  );
}

export default PaymentSuccess;