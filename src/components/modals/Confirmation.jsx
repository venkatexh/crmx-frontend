import "../../sass/components/modals/confirmation.component.scss";
import {toggleConfirmationModal} from "../../redux/actions/utility/toggleConfirmationModal";
import {useDispatch} from "react-redux";

const Confirmation = ({payload}) => {
  const {message, trueText, falseText, action, type} = payload;
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(toggleConfirmationModal(null))
  }
  return (
    <div className={'confirmationModalContainer'}>
      <div className={'confirmationModal'}>
        <div className={'confMessage'}>{message}</div>
        <div className={'buttonsContainer'}>
          <button onClick={action}
                  className={`${type === 'error' ? 'errorButton' : 'successButton'} confButton`}>{trueText}</button>
          <button onClick={closeModal} className={'noButton confButton'}>{falseText}</button>
        </div>
      </div>
    </div>
  )
}

export default Confirmation;