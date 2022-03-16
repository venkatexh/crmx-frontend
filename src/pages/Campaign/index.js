import Header from "../../components/Campaign/Header";
import RightNav from "../../components/navigation/RightNav";
import "../../sass/pages/contact.page.scss";
import {useEffect, useState} from "react";
import Axios from "axios";
import hostHeader from "../../config/host";
import Body from "../../components/Campaign/Body";

const Campaign = (props) => {
  const [campaign, setCampaign] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Axios.get(`${hostHeader.url}/api/campaign/${props.match.params.id}`).then(res => {
      setCampaign(res.data)
      setLoading(false);
    });
  }, []);

  const divToRender = () => {
    return (
      <div className={'contactPage'}>
        {loading ?
          <div className={'contactBodyLoader'}>
            <img
              src={"/loaders/comp_loader.gif"}
              alt={"loader"}
              style={{height: "60px"}}
            />
          </div> :
          <div className={'leftCol'}>
            <Header campaign={campaign}/>
            <Body campaign={campaign}/>
          </div>
        }
        <div className={'rightCol'}>
          <RightNav/>
        </div>
      </div>
    )
  }
  return divToRender();
}

export default Campaign;