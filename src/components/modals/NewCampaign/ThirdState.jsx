import hostHeader from "../../../config/host";
import Axios from "axios";
import {useState} from "react";

const ThirdState = ({campaignId}) => {

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(false);

  const sendCampaign = async () => {
    setLoading(true)
    Axios.post(`${hostHeader.url}/api/email/send`,
      {campaignId}).then(res => {
        if(res.status === 200) {
          setSuccess(true);
          setLoading(false);
        } else {
          setError(true);
          setLoading(false);
        }
    }
  )}

  const divToRender = () => {
    if(loading) {
      return <div className={"campaignSubmitLoading"}><img src={'/loaders/comp_loader.gif'} alt={'loader'} /></div>
    }
    else if(error) {
      return <div className={'campaignSubmitLoading'}>Oops. Something went wrong! Please try again.</div>
    } else if(success) {
      return <div className={'campaignSubmitLoading'}>Campaign was sent successfully!</div>
    } else {
      return <div className={"newCampaign"}>
        <div className={"success"}>
          <img
            src={"/icons/checked.png"}
            alt={"success"}
            className={"successIcon"}
          />
          <div className={"message"}>Your campaign was created!</div>
        </div>
        <div className={"buttonsGroup"}>
          <button className={"button send"} onClick={sendCampaign}>Send Now</button>
          <button className={"button schedule"}>Schedule</button>
        </div>
      </div>
    }
  }
  return divToRender();
};
export default ThirdState;
