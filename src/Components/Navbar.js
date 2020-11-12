import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import MyWaysLogo from "./MyWaysLogo.png";
import InstantLogo from "./Instantlogo.png";
import "./Navbar.scss";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <div
          className="navbar__menu-icons"
          onClick={() => {
            setClick(!click);
          }}
        >
          <i
            className={
              click ? "bx bx-x crossIcon" : " bx bx-menu hamburgerIcons"
            }
          ></i>
        </div>
        <Link to="/" className="navbar__logo">
          <img src={MyWaysLogo} alt="" />
        </Link>
        <ul className={click ? "navbar__menu active" : "navbar__menu "}>
          <li className="navbar__menu__items">
            <Link
              to="/"
              className="navbar__dropdown-links"
              onClick={() => setDropdown(!dropdown)}
            >
              For You <i className="bx bxs-down-arrow dropdown-icon"></i>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="navbar__menu__items">
            <Link
              className="instantApply"
              to="/instant-apply"
              onClick={() => setClick(false)}
            >
              Instant Apply
              <img className="instant-logo" src={InstantLogo} alt="img" />
            </Link>
          </li>
          <li className="navbar__menu__items">
            <Link to="/pricing" onClick={() => setClick(false)}>
              Pricing
            </Link>
          </li>
          <li className="navbar__menu__items">
            <Link to="/about-us" onClick={() => setClick(false)}>
              About us
            </Link>
          </li>
        </ul>
        <ul className="navbar__menu--permanent">
          <li className="navbar__menu__items">
            <Link className="primary-text" to="/signUp">
              SIGN UP
            </Link>
          </li>
          <li className="navbar__menu__items">
            <Link className=" btn-dark" to="/login">
              LOGIN
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
