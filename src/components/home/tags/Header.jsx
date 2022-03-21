import { useDispatch, useSelector } from "react-redux";
import "../../../sass/components/home/dashboard/header.component.scss";
import { toggleModal } from "../../../redux/actions/utility/toggleModal";

const Header = () => {
  const state = useSelector(({ loggedUser }) => ({ loggedUser }));
  const dispatch = useDispatch();
  const modalType = "new-tag";
  const handleClick = () => {
    dispatch(toggleModal(modalType));
  };
  return (
    <div className={"dashHeader"}>
      <div>
        <div className={"greeting"}>Contacts</div>
        <div className={"contactCount"}>
          You have <span className={"highlight"}>1414</span> tags in{" "}
          {state.loggedUser.company}
        </div>
      </div>
      <div>
        <button className={"viewContactsBtn"} onClick={() => handleClick()}>
          New Tag
        </button>
      </div>
    </div>
  );
};

export default Header;
