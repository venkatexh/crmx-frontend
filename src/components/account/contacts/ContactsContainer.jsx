import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveContacts } from "../../../redux/actions/account/saveContacts";
import "../../../sass/components/account/contacts/contactsContainer.component.scss";

const ContactsContainer = () => {
  const dispatch = useDispatch();
  const state = useSelector(({ loggedUser, contacts }) => ({
    loggedUser,
    contacts,
  }));
  useEffect(() => {
    setTimeout(() => {
      dispatch(saveContacts(state.loggedUser.id));
    }, 1000);
  }, []);
  return (
    <div
      className={`${
        state.contacts.length === 0 ? "loading" : "loaded"
      } container`}
    >
      {state.contacts.length === 0 ? (
        <div>
          <img
            src={"/loaders/comp_loader.gif"}
            alt={"loader"}
            style={{ height: "60px" }}
          />
        </div>
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
              .map(({ firstName, lastName, email, status, location }) => {
                return (
                  <div className={"rowContainer"}>
                    <div className={"contactRow"}>
                      <div className={"colEmail"}>{email}</div>
                      <div className={"col"}>{firstName}</div>
                      <div className={"col"}>{lastName}</div>
                      <div className={"col"}>{status}</div>
                      <div className={"col"}>{location}</div>
                    </div>
                    <hr className={"separator"} />
                  </div>
                );
              })}
          </div>
        </>
      )}
    </div>
  );
};

export default ContactsContainer;
