import { useState } from "react";
import hostHeader from "../../config/host";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { toggleModal } from "../../redux/actions/utility/toggleModal";
import { updateContacts } from "../../redux/actions/account/updateContacts";

const NewContact = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("Subscribed");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const state = useSelector(({ loggedUser, contacts }) => ({
    loggedUser,
    contacts,
  }));

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email === "" || !email.trim()) {
      setErrorMessage("Please enter the email.");
    } else if (status === "" || !status.trim()) {
      setErrorMessage("Status is required.");
    } else {
      setLoading(true);
      const contact = {
        email,
        firstName,
        lastName,
        location,
        status,
      };
      Axios.post(
        `${hostHeader.url}/api/user/${state.loggedUser.id}/contacts`,
        contact
      )
        .then((res) => {
          if (res.status === 200) {
            dispatch(updateContacts([...state.contacts, contact]));
            dispatch(toggleModal(null));
          }
        })
        .catch((error) => {
          setErrorMessage(error.response.data.message);
          setLoading(false);
        });
    }
  };

  return (
    <div className={"newContact"}>
      <div className={"header"}>Create a new contact</div>
      <form className={"form"}>
        <input
          className={"modalInput inputLarge"}
          type={"email"}
          placeholder={"myemail@domain.com"}
          onChange={(e) => {
            setErrorMessage("");
            setEmail(e.target.value);
          }}
          value={email}
        />
        <div className={"inputsContainer"}>
          <input
            className={"modalInput inputSmall"}
            type={"text"}
            placeholder={"first name"}
            onChange={(e) => {
              setErrorMessage("");
              setFirstName(e.target.value);
            }}
            value={firstName}
          />
          <input
            className={"modalInput inputSmall"}
            type={"text"}
            placeholder={"last name"}
            onChange={(e) => {
              setErrorMessage("");
              setLastName(e.target.value);
            }}
            value={lastName}
          />
        </div>
        <div className={"inputsContainer"}>
          <input
            className={"modalInput inputSmall"}
            type={"text"}
            placeholder={"location"}
            onChange={(e) => {
              setLocation(e.target.value);
              setErrorMessage("");
            }}
            value={location}
          />
          <select
            className={"modalInput inputSmall dropdown"}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="subscribed">Subscribed</option>
            <option value="unsubscribed">Unsubscribed</option>
          </select>
        </div>
        <div className={"utility"}>
          <div className={"errorMessage"}>{errorMessage}</div>
          <button
            type={"submit"}
            className={"button"}
            onClick={handleFormSubmit}
          >
            {loading ? (
              <img
                src={"loaders/btn_loader.gif"}
                alt={"loader"}
                style={{ height: "30px" }}
              />
            ) : (
              "Create"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewContact;
