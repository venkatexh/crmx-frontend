import "../../sass/components/contact/contact.component.scss";
import {toggleConfirmationModal} from "../../redux/actions/utility/toggleConfirmationModal";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import Axios from "axios";
import hostHeader from "../../config/host";
import {useState} from "react";
import {updateContact} from "../../redux/actions/contact/updateContact";

const Header = ({contact}) => {
  const {firstName, lastName, email, status} = contact;
  const dispatch = useDispatch();
  const history = useHistory();
  const [actionDropdown, toggleActionDropdown] = useState(false);

  const deleteContact = () => {
    Axios.delete(`${hostHeader.url}/api/contact/${contact._id}`).then(r => {
      if (r.status === 200) {
        dispatch(toggleConfirmationModal(null));
        history.push('/account');
      }
    })
  }

  const subscribeContact = () => {
    Axios.post(`${hostHeader.url}/api/contact/${contact._id}/subscribe`).then(r => {
      if (r.status === 200) {
        dispatch(toggleConfirmationModal(null));
        dispatch(updateContact(r.data));
      }
    })
  }

  const unsubscribeContact = () => {
    Axios.post(`${hostHeader.url}/api/contact/${contact._id}/unsubscribe`).then(r => {
      if (r.status === 200) {
        dispatch(toggleConfirmationModal(null));
        dispatch(updateContact(r.data));
      }
    })
  }

  const handleActionToggle = () => {
    toggleActionDropdown(!actionDropdown)
  }

  const deletionData = {
    message: "Are you sure you want to delete this contact?",
    trueText: "Delete",
    falseText: "No",
    action: deleteContact,
    type: 'error'
  }

  const subscribeData = {
    message: "Subscribe this contact? Only subscribed contacts receive emails.",
    trueText: "Yes",
    falseText: "No",
    action: subscribeContact,
    type: 'success'
  }

  const unsubscribeData = {
    message: "Unsubscribe this contact? Unsubscribed contacts do not receive emails.",
    trueText: "Yes",
    falseText: "No",
    action: unsubscribeContact,
    type: 'error'
  }

  const handleDeleteClick = () => {
    dispatch(toggleConfirmationModal(deletionData));
  }

  const handleSubscribeClick = () => {
    dispatch(toggleConfirmationModal(subscribeData));
  }

  const handleUnsubscribeClick = () => {
    dispatch(toggleConfirmationModal(unsubscribeData))
  }

  return <>
    <div className={'contactHeader'}>
      <div className={'left'}>
        <div className={'name'}>{firstName} {lastName}</div>
        <div className={'email'}>{email}</div>
      </div>
      <div>
        <div>Added 2nd Jan 2022</div>
        <div>Last Updated 2nd Jan 2022</div>
      </div>
      <div className={'actionsButtonGroup'}>
        <div className={'actionsButton'} onClick={handleActionToggle}>Actions</div>
        {
          actionDropdown ?
            <div className={'actionDropdown'}>
              <div className={'actionOption'}>
                <div className={'optionText'} onClick={handleDeleteClick}>Delete</div>
              </div>
              {
                contact.status === 'Unsubscribed' ?
                  <div className={'actionOption'}>
                    <div className={'optionText'} onClick={handleSubscribeClick}>Subscribe</div>
                  </div>
                  :
                  <div className={'actionOption'}>
                    <div className={'optionText'} onClick={handleUnsubscribeClick}>Unsubscribe</div>
                  </div>
              }
            </div>
            :
            <></>
        }
      </div>
      <div className={`${status === 'Subscribed' ? 'subscribed' : 'unsubscribed'} contactStatus`}>{status}</div>
    </div>
    <hr/>
  </>
}

export default Header;