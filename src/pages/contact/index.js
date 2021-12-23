import Header from "../../components/Contact/Header";
import RightNav from "../../components/navigation/RightNav";
import "../../sass/pages/contact.page.scss";
import {useEffect, useState} from "react";
import Axios from "axios";
import hostHeader from "../../config/host";
import Body from "../../components/Contact/Body";

const Contact = (props) => {
  const [contact, setContact] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Axios.get(`${hostHeader.url}/api/contact/${props.match.params.id}`).then(res => {
      setContact(res.data)
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
            <Header contact={contact}/>
            <Body contact={contact}/>
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

export default Contact;