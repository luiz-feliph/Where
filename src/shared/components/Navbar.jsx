import "../../index.css";
import "./Navbar.css";


import Logo from "../../assets/Where.svg";
import Statistic from "../../assets/Statistic.svg";
import Return from "../../assets/Return.svg";

import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  let navIcon = null;
  let iconAlt = "";
  let nextRoute = "";

  if (location.pathname === "/dashboard") {
    navIcon = Return;
    iconAlt = "Return";
    nextRoute = "/";
  } else {
    navIcon = Statistic;
    iconAlt = "Statistic";
    nextRoute = "/dashboard";
  }

  return (
    <div className="navbar-container">
      <nav>
          <Link to={nextRoute} id="icon">
            <img src={navIcon} alt={iconAlt} />
          </Link>
          <img src={Logo} alt="Where Logo" width="92" height="25" id="logo"/>
      </nav>
    </div>
  );
}

export default Navbar;
