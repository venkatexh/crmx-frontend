import PlanCard from "../../components/Plan/PlanCard";
import '../../sass/pages/account.page.scss';
import {planData} from './planData';
import {useEffect, useState} from "react";
import CurrentPlanCard from "../../components/Plan/CurrentPlanCard";
import PlanFeaturesCard from "../../components/Plan/PlanFeaturesCard";
import {planFeatures} from "../../components/Plan/planFeatures";
import {useSelector} from "react-redux";

const Account = () => {
  const [rate, changeRate] = useState('per month');
  const [curr, setCurr] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(0);
  const state = useSelector(({loggedUser}) => ({loggedUser}));

  useEffect(() => {

  }, [state.loggedUser])

  const handleViewDetails = (plan) => {
    setSelectedPlan(plan);
  }
  console.log(state.loggedUser)

  const componentToRender = () => {
    if (curr === 0) {
      return (
        <div className={'parentContainer'}>
          <CurrentPlanCard/>
          <div className={'plansContainer'}>
            {
              planData.map((plan, idx) => (
                <PlanCard name={plan.name} price={plan.price} rate={rate} description={plan.description}
                          key={idx} idx={idx} handleClick={handleViewDetails}
                          selected={selectedPlan} userPlan={state.loggedUser.plan.name}
                          userPlanRank={state.loggedUser.plan.rank}/>))
            }
          </div>
          <PlanFeaturesCard plan={planFeatures[selectedPlan]}/>
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