import PlanCard from "../../components/Plan/PlanCard";
import '../../sass/pages/account.page.scss';
import {useState} from "react";

const Account = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Basic home to get started with your marketing efforts'
    },
    {
      name: 'Standard',
      price: '$99',
      description: 'With more features to enhance your ideas'
    },
    {
      name: 'Pro',
      price: '$299',
      description: 'With advanced tools for large businesses'
    }
  ]

  const [rate, changeRate] = useState('Per Month')

  return (
    <div className={'planPage'}>
      <div className={'plansContainer'}>
        {
          plans.map(plan => (
            <PlanCard name={plan.name} price={plan.price} rate={rate} description={plan.description}
                      action={'Upgrade'}/>))
        }
      </div>
    </div>
  )
}

export default Account;