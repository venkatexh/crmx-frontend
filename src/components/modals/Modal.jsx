import "../../sass/components/modals/modal.component.scss";
import NewContact from "./NewContact";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../redux/actions/utility/toggleModal";
import NewCampaign from "./NewCampaign";

const Modal = () => {
  const dispatch = useDispatch();
  const state = useSelector(({ modalState }) => ({ modalState }));
  const newContact = "new-contact";
  const newCampaign = "new-campaign";
  const modalMap = new Map();

  modalMap.set(newContact, <NewContact />);
  modalMap.set(newCampaign, <NewCampaign />);

  const handleModalClose = () => {
    dispatch(toggleModal(null));
  };

  const componentToRender = () => {
    return modalMap.get(state.modalState);
  };

  return (
    <div className={"modalContainer"}>
      <div className={"modal"}>
        <img
          src={"/icons/return.png"}
          alt={"return"}
          className={"return"}
          onClick={handleModalClose}
        />
        {componentToRender()}
      </div>
    </div>
  );
};

export default Modal;
