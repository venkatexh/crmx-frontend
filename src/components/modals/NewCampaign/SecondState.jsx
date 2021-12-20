import {useEffect, useState} from "react";
import "../../../sass/components/modals/newCampaign.scss";
import Axios from "axios";
import hostHeader from "../../../config/host";
import {useDispatch, useSelector} from "react-redux";
import {updateCampaigns} from "../../../redux/actions/account/updateCampaigns";

const SecondState = ({
                       name,
                       tags,
                       subject,
                       from,
                       text,
                       html,
                       handleTextChange,
                       handleHtmlChange,
                       handleStateChange,
                       handleSubjectChange,
                       handleFromChange,
                       handlePrevState,
                     }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailType, setEmailType] = useState(0);
  const [sendTo, setSendTo] = useState([]);

  const dispatch = useDispatch();

  const state = useSelector(({loggedUser, campaigns}) => ({
    loggedUser,
    campaigns,
  }));

  useEffect(() => {
    setLoading(true);
    for (const tag of tags) {
      Axios.get(`${hostHeader.url}/api/tag/${tag.id}/contacts`)
        .then((res) => {
          setSendTo((prevState) => [...prevState, ...res.data]);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
          setErrorMessage("Something went wrong! please try again.");
          setLoading(false);
        });
    }
  }, [tags]);

  const handleButtonClick = async (e) => {
    e.preventDefault();
    if (subject === "" || !subject.trim()) {
      setErrorMessage("Please enter the subject.");
    } else if (emailType === 0 && (text === "" || !text.trim())) {
      setErrorMessage("Please enter email text.");
    } else if (emailType === 1 && (html === "" || !html.trim())) {
      setErrorMessage("Please enter the HTML code.");
    } else {
      setLoading(true);
      const campaign = {
        name,
        tags: tags.map((tag) => tag.id),
        subject,
        from,
        text,
        html,
        sentTo: sendTo,
      };
      Axios.post(
        `${hostHeader.url}/api/user/${state.loggedUser.id}/campaigns`,
        campaign
      )
        .then((res) => {
          if (res.status === 200) {
            dispatch(updateCampaigns([...state.campaigns, res.data]));
            handleStateChange();
          }
        })
        .catch((err) => {
          console.log(err.message);
          setErrorMessage("Something went wrong! please try again.");
        });
    }
  };
  if (loading) {
    return (
      <div className={"campaignSubmitLoading"}>
        <img
          src={"/loaders/comp_loader.gif"}
          alt={"loader"}
          className={"loader"}
        />
      </div>
    );
  } else {
    return (
      <div className={"newCampaign"}>
        <div className={"header"}>Create new campaign</div>
        <form className={"form"}>
          <div>
            <label>Create an email for your campaign</label>
            <input
              className={"modalInput inputLarge"}
              value={subject}
              placeholder={"Enter email subject"}
              onChange={(e) => {
                setErrorMessage("");
                handleSubjectChange(e);
              }}
            />
          </div>
          <div>
            <input
              className={"modalInput inputLarge"}
              value={from}
              placeholder={"From"}
              onChange={(e) => {
                setErrorMessage("");
                handleFromChange(e);
              }}
            />
          </div>
          <div className={"selectionGroup"}>
            <div
              className={`${emailType === 0 ? "selected" : ""} selection left`}
              onClick={() => {
                setErrorMessage("");
                setEmailType(0);
              }}
            >
              Text
            </div>
            <div
              className={`${emailType === 1 ? "selected" : ""} selection right`}
              onClick={() => {
                setErrorMessage("");
                setEmailType(1);
              }}
            >
              HTML
            </div>
          </div>
          {emailType === 0 ? (
            <div>
              <textarea
                rows={10}
                className={"emailText"}
                value={text}
                onChange={(e) => handleTextChange(e)}
              />
            </div>
          ) : (
            <div className={"tagsInput"}>
              <div className={"tagsList"}>
                <div className={"selectedTagsList"}></div>
                <div className={"userTagsList"}></div>
              </div>
            </div>
          )}
          <div className={"btnContainer"}>
            <div className={"errorMessage"}>{errorMessage}</div>
            <button className={"button"} onClick={handleButtonClick}>
              Create
            </button>
          </div>
        </form>
        <div className={"goBack"} onClick={handlePrevState}>
          go back
        </div>
      </div>
    );
  }
};

export default SecondState;
