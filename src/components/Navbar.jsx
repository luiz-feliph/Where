import "../index.css";
import "./Navbar.module.css";

import Logo from "../assets/Where.svg";
import Statistic from "../assets/Statistic.svg";
import Calendar from "../assets/Calendar.svg";
import Return from "../assets/Return.svg";

import { Link, useLocation } from "react-router-dom";

function Navbar() {

  const location = useLocation();
  
  let navIcon = null
  let iconAlt = ''
  let nextRoute= ''

  if (location.pathname === '/dashboard') {
    navIcon = Return
    iconAlt = 'Return'
    nextRoute = '/'
  } else {
    navIcon = Statistic
    iconAlt = 'Statistic'
    nextRoute = '/dashboard'
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to={nextRoute}>
            <img src={navIcon} alt={iconAlt} />
          </Link>
        </li>
        <li>
          <img src={Logo} alt="Where Logo" width="92" height="25" id="logo" />
        </li>
        <li>
          <a href="">
            <img src={Calendar} alt="Calendar" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
