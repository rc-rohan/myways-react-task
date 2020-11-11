import { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.scss";

const Dropdown = () => {
  const [click, setClick] = useState(false);
  return (
    <ul
      className={click ? "dropdown__menu--clicked" : "dropdown__menu"}
      onClick={() => setClick(!click)}
    >
      <li>
        <Link
          to="/find-matching-internships"
          className="dropdown-link"
          onClick={() => setClick(false)}
        >
          Find matching internships
        </Link>
      </li>
      <li>
        <Link
          to="/hire-right-talent"
          className="dropdown-link"
          onClick={() => setClick(false)}
        >
          Hire right talent
        </Link>
      </li>
      <li>
        <Link
          to="/work-from-home"
          className="dropdown-link"
          onClick={() => setClick(false)}
        >
          Work from Home
        </Link>
      </li>
    </ul>
  );
};

export default Dropdown;
