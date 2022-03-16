import '../../sass/components/plan/planCard.component.scss';

const PlanFeaturesCard = ({plan}) => {
  // const {name, contacts, emails, featuresYes, featuresNo} = plan;
  const componentToRender = () => {
    return plan === {} ? <></>
      :
      <div className={'featuresCard'}>
        <div className={'planName'}>{plan.name}</div>
        <div className={'featuresContainer'}>
          <div className={'featuresLeft'}>
            <div className={'counts'}>{plan.contacts} contacts</div>
            <div className={'counts'}>{plan.emails} email sends per month</div>
          </div>
          <div className={'featuresRight'}>
            {plan?.featuresYes.map((feature, idx) => {
              return (
                <div key={idx} className={'feature'}>
                  <img src={'/icons/tick.png'} className={'icon'} alt={'icon'}/>
                  <div className={'featureText'}>{feature}</div>
                </div>
              )
            })}
            {plan?.featuresNo.map((feature, idx) => {
              return (
                <div key={idx} className={'feature'}>
                  <img src={'/icons/cross.png'} className={'icon'} alt={'icon'}/>
                  <div className={'featureText'}>{feature}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
  }
  return (
    <>{componentToRender()}</>
  );
}

export default PlanFeaturesCard;