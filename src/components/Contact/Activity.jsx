import {Link} from "react-router-dom";

const Activity = ({activity}) => {
  const {type, text, doneAt, refId, campaignName} = activity;

  const iconType = () => {
    if (type === 'Added') {
      return 'plus';
    } else if (type === 'Campaign') {
      return 'email';
    } else if (type === 'Subscribed') {
      return 'subscribe';
    } else if (type === 'Unsubscribed') {
      return 'unsubscribe';
    }
  }

  const renderActivity = () => {
    if (type === 'Campaign') {
      return (
        <div className={'activityCardLeft'}>
          <img src={`/icons/${iconType()}.png`} className={'activityIcon'} alt={'icon'}/>
          <div>Contact was sent campaign&nbsp;</div>
          <Link to={`/campaign/${refId}`}>{campaignName}</Link>
        </div>
      );
    } else if (type === 'Added') {
      return (
        <div className={'activityCardLeft'}>
          <img src={`/icons/${iconType()}.png`} className={'activityIcon'} alt={'icon'}/>
          <div>{text}</div>
        </div>
      );
    } else if (type === 'Subscribed') {
      return (
        <div className={'activityCardLeft'}>
          <img src={`/icons/${iconType()}.png`} className={'activityIcon'} alt={'icon'}/>
          <div>Contact was subscribed</div>
        </div>
      )
    } else if (type === 'Unsubscribed') {
      return (
        <div className={'activityCardLeft'}>
          <img src={`/icons/${iconType()}.png`} className={'activityIcon'} alt={'icon'}/>
          <div>Contact was unsubscribed</div>
        </div>
      )
    }
  }
  return <>
    <div className={'activityCard'}>
      {
        renderActivity()
      }
      <div className={'activityCardMiddle'}>
        <img src={'/icons/long-arrow.png'} className={'longArrow'} alt={'icon'}/>
      </div>
      <div className={'activityCardRight'}>{doneAt}</div>
    </div>
    <hr/>
  </>
}

export default Activity;