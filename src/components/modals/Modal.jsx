import { lazy, Suspense } from "react";
import "../../sass/components/modals/modal.component.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../redux/actions/utility/toggleModal";

const NewContact = lazy(() => import("./NewContact"));
const NewCampaign = lazy(() => import("./NewCampaign/NewCampaign"));
const NewTag = lazy(() => import("./NewTag"));

const Modal = () => {
  const dispatch = useDispatch();
  const state = useSelector(({ modalState }) => ({ modalState }));
  const newContact = "new-contact";
  const newCampaign = "new-campaign";
  const newTag = "new-tag";
  const modalMap = new Map();

  modalMap.set(newContact, <NewContact />);
  modalMap.set(newCampaign, <NewCampaign />);
  modalMap.set(newTag, <NewTag />);

  const handleModalClose = () => {
    dispatch(toggleModal(null));
  };

  const componentToRender = () => {
    return (
      <Suspense fallback={"Loading.."}>
        {" "}
        {modalMap.get(state.modalState)}
      </Suspense>
    );
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
