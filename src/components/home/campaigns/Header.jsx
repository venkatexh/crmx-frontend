import { useDispatch } from "react-redux";
import "../../../sass/components/home/dashboard/header.component.scss";
import { toggleModal } from "../../../redux/actions/utility/toggleModal";

const Header = () => {
  // const state = useSelector(({ loggedUser }) => ({ loggedUser }));
  const dispatch = useDispatch();
  const modalType = "new-campaign";
  const handleClick = () => {
    dispatch(toggleModal(modalType));
  };
  return (
    <div className={"dashHeader"}>
      <div>
        <div className={"greeting"}>Campaigns</div>
        <div className={"contactCount"}>
          You have <span className={"highlight"}>1414</span> campaigns
        </div>
      </div>
      <div>
        {/*<Link to={"contacts"}>*/}
        <button className={"viewContactsBtn"} onClick={() => handleClick()}>
          New Campaign
        </button>
        {/*</Link>*/}
      </div>
    </div>
  );
};

export default Header;
