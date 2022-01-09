import {useDispatch, useSelector} from "react-redux";
import "../../../sass/components/home/dashboard/header.component.scss";
import {Link} from "react-router-dom";
import {toggleModal} from "../../../redux/actions/utility/toggleModal";

const Header = () => {
  const state = useSelector(({loggedUser}) => ({loggedUser}));
  console.log(state.loggedUser)
  const dispatch = useDispatch();
  const modalType = "new-contact";
  const handleClick = () => {
    dispatch(toggleModal(modalType));
  };
  return (
    <div className={"dashHeader"}>
      <div>
        <div className={"greeting"}>Contacts</div>
        <div className={"contactCount"}>
          You have <span className={"highlight"}>1414</span> contacts in{" "}
          {state.loggedUser.company}
        </div>
      </div>
      <div>
        <Link to={"contacts"}>
          <button className={"viewContactsBtn"} onClick={() => handleClick()}>
            New Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
