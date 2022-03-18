import Header from "../../components/Contact/Header";
import "../../sass/pages/contact.page.scss";
import { useEffect, useState } from "react";
import Body from "../../components/Contact/Body";
import { useDispatch, useSelector } from "react-redux";
import { fetchContact } from "../../redux/actions/contact/fetchContact";

const Contact = (props) => {
  const state = useSelector(({ selectedContact }) => ({ selectedContact }));
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(fetchContact(props.match.params.id)).then(() => setLoading(false));
  }, []);

  const divToRender = () => {
    return (
      <div className={"contactPage"}>
        {loading ? (
          <div className={"contactBodyLoader"}>
            <img
              src={"/loaders/comp_loader.gif"}
              alt={"loader"}
              style={{ height: "60px" }}
            />
          </div>
        ) : (
          <div className={"leftCol"}>
            <Header contact={state.selectedContact} />
            <Body contact={state.selectedContact} />
          </div>
        )}
      </div>
    );
  };
  return divToRender();
};

export default Contact;
