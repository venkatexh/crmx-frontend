import '../../sass/components/plan/planCard.component.scss';

const CurrentPlanCard = () => {
  return (
    <div className={'currentPlan'}>
      <div className={'currentLeft'}>
        <div className={'textTop'}>Current Plan</div>
        <div className={'textMid'}>Standard</div>
        <div className={'textBottom'}>$99 per month</div>
      </div>
      <div className={'currentRight'}></div>
    </div>
  )
}

export default CurrentPlanCard;