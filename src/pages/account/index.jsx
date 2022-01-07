import PlanCard from "../../components/Plan/PlanCard";
import '../../sass/pages/account.page.scss';
import {planData} from './planData';
import {useState} from "react";

const Account = () => {
  const [rate, changeRate] = useState('Per Month');
  return (
    <div className={'planPage'}>
      <div className={'plansContainer'}>
        {
          planData.map((plan, idx) => (
            <PlanCard name={plan.name} price={plan.price} rate={rate} description={plan.description}
                      action={'Upgrade'} key={idx}/>))
        }
      </div>
    </div>
  );
}

export default Account;