import "../../sass/components/navigation.component.scss";
import { useDispatch } from "react-redux";
import { changeWindow } from "../../redux/actions/account/changeWindow";
import { Link } from "react-router-dom";
import { memo } from "react";

const LeftNav = () => {
  const dispatch = useDispatch();
  const handleWindowChange = (window) => {
    dispatch(changeWindow(window));
  };

  const panes = ["dashboard", "contacts", "campaigns", "tags"];

  const NavLink = memo(({ pane }) => {
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
  });

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
