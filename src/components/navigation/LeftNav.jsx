import { Link } from "react-router-dom";
import "../../sass/components/navigation.component.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeWindow } from "../../redux/actions/account/changeWindow";

const LeftNav = () => {
  const dispatch = useDispatch();
  const state = useSelector(({ accountWindow }) => ({ accountWindow }));
  const handleWindowChange = (window) => {
    dispatch(changeWindow(window));
  };

  const windows = ["dashboard", "contacts", "campaigns", "tags", "surveys"];

  const NavLink = ({ window }) => {
    return (
      <Link to={`/${window}`} style={{ textDecoration: "none" }}>
        <div
          className={`${
            state.accountWindow === window ? "navHighlighted" : ""
          } navLink`}
          onClick={() => handleWindowChange(window)}
        >
          {window.charAt(0).toUpperCase() + window.slice(1)}
        </div>
      </Link>
    );
  };
  return (
    <div className={"navigation"}>
      {windows.map((window) => {
        return <NavLink window={window} />;
      })}
    </div>
  );
};
export default LeftNav;
