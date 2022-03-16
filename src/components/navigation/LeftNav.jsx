import "../../sass/components/navigation.component.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeWindow } from "../../redux/actions/account/changeWindow";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const dispatch = useDispatch();
  const state = useSelector(({ accountWindow }) => ({ accountWindow }));
  const handleWindowChange = (window) => {
    dispatch(changeWindow(window));
  };

  const panes = ["dashboard", "contacts", "campaigns", "tags"];

  const NavLink = ({ pane }) => {
    return (
      <Link
        to={`/${pane}`}
        className={`${
          window.location.pathname === `/${pane}` ? "navHighlighted" : ""
        } navLink`}
        onClick={() => handleWindowChange(pane)}
      >
        <span className={"text"}>
          {pane.charAt(0).toUpperCase() + pane.slice(1)}
        </span>
      </Link>
    );
  };
  return (
    <div className={"navigation"}>
      <div className={"logo"}>CRMX</div>
      {panes.map((pane, idx) => {
        return <NavLink key={idx} pane={pane} />;
      })}
    </div>
  );
};
export default LeftNav;
