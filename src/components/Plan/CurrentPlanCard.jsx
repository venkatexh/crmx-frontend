import '../../sass/components/plan/planCard.component.scss';
import {useSelector} from "react-redux";

const CurrentPlanCard = () => {
  const state = useSelector(({loggedUser}) => ({loggedUser}));
  const {plan} = state.loggedUser;
  return (
    <div className={'currentPlan'}>
      <div className={'currentLeft'}>
        <div className={'textTop'}>Current Plan</div>
        <div className={'textMid'}>{plan.name}</div>
        <div className={'textBottom'}>${plan.amount} {plan.rate}</div>
      </div>
      <div className={'currentRight'}></div>
    </div>
  )
}

export default CurrentPlanCard;