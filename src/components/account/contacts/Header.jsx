import { useDispatch, useSelector } from "react-redux";
import "../../../sass/components/account/dashboard/header.component.scss";
import { Link } from "react-router-dom";
import { changeWindow } from "../../../redux/actions/account/changeWindow";

const Header = () => {
  const state = useSelector(({ loggedUser }) => ({ loggedUser }));
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeWindow("contacts"));
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
