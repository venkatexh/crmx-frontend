import '../../sass/components/plan/planCard.component.scss'
import {saveSelectedPlan} from "../../redux/actions/plan/saveSelectedPlan";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import {fetchStripeSecret} from "../../redux/actions/plan/fetchStripeSecret";

const PlanCard = ({name, price, rate, action, description, features}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleActionClick = async () => {
    await dispatch(fetchStripeSecret(price));
    dispatch(saveSelectedPlan({
      name,
      price,
      description
    }));
    history.push('/checkout');
  }

  return (
    <div className={'planCard'}>
      <div className={'planName'}>{name}</div>
      <div>
        <div className={'planPrice'}>{price}</div>
        <div className={'planRate'}>{rate}</div>
      </div>
      <div className={'planFeatures'}>{features}</div>
      <div>{description}</div>
      <div>
        <button className={`${action === 'Upgrade' ? 'upgradeButton' : 'currentButton'}`}
                onClick={handleActionClick}>{action}</button>
      </div>
    </div>
  )
}

export default PlanCard;