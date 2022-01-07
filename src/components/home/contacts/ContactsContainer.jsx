import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {saveContacts} from "../../../redux/actions/account/saveContacts";
import "../../../sass/components/home/contacts/contactsContainer.component.scss";
import Link from "react-router-dom/es/Link";
import {saveTags} from "../../../redux/actions/account/saveTags";

const ContactsContainer = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const state = useSelector(({loggedUser, contacts}) => ({
    loggedUser,
    contacts,
  }));

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      dispatch(saveContacts(state.loggedUser.id));
      dispatch(saveTags(state.loggedUser.id))
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={`${loading ? "loading" : "loaded"} container`}>
      {loading ? (
        <div>
          <img
            src={"/loaders/comp_loader.gif"}
            alt={"loader"}
            style={{height: "60px"}}
          />
        </div>
      ) : state.contacts.length === 0 ? (
        <div>You don't have any contacts</div>
      ) : (
        <>
          <div className={"header"}>
            <div className={"colEmail"}>Email</div>
            <div className={"col"}>First Name</div>
            <div className={"col"}>Last Name</div>
            <div className={"col"}>Status</div>
            <div className={"col"}>Location</div>
          </div>
          <div className={"scroll"}>
            {state.contacts
              .slice(0)
              .reverse()
              .map(({_id, firstName, lastName, email, status, location}) => {
                return (
                  <Link to={`/contact/${_id}`} className={'contactLink'}>
                    <div key={_id} className={"rowContainer"}>
                      <div className={"contactRow"}>
                        <div className={"colEmail"}>{email}</div>
                        <div className={"col"}>{firstName}</div>
                        <div className={"col"}>{lastName}</div>
                        <div className={"col"}>{status}</div>
                        <div className={"col"}>{location}</div>
                      </div>
                      <hr className={"separator"}/>
                    </div>
                  </Link>
                );
              })}
          </div>
        </>
      )}
    </div>
  );
};

export default ContactsContainer;
