import PlanCard from "../../components/Plan/PlanCard";
import '../../sass/pages/account.page.scss';
import {planData} from './planData';
import {useState} from "react";
import CurrentPlanCard from "../../components/Plan/CurrentPlanCard";

const Account = () => {
  const [rate, changeRate] = useState('Per Month');
  const [curr, setCurr] = useState(0);

  const componentToRender = () => {
    if (curr === 0) {
      return (
        <div className={'parentContainer'}>
          <CurrentPlanCard/>
          <div className={'plansContainer'}>
            {
              planData.map((plan, idx) => (
                <PlanCard name={plan.name} price={plan.price} rate={rate} description={plan.description}
                          action={'Upgrade'} key={idx}/>))
            }
          </div>
        </div>
      )
    } else if (curr === 1) {
      return (
        <div className={'parentContainer'}>Bills</div>
      )
    }
  }

  return (
    <div className={'planPage'}>
      <div className={'accountNav'}>
        <div className={`${curr === 0 ? 'selectedItem' : 'unselectedItem'} navItem`} onClick={() => setCurr(0)}><span
          className={'itemText'}>Plans</span></div>
        <div className={`${curr === 1 ? 'selectedItem' : 'unselectedItem'} navItem`} onClick={() => setCurr(1)}><span
          className={'itemText'}>Bills</span></div>
      </div>
      {componentToRender()}
    </div>
  );
}

export default Account;