import React from "react";
import { Link } from "react-router-dom";
import calendlyLogo from "../assets/images/homepage/calendly_logo.svg";

const NavLink = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-center gap-7 font-semibold ml-[-180px] mb-10">
        <Link to="/">
          <img
            src={calendlyLogo}
            alt="Calendly Logo"
            className="w-32 h-32 mr-10"
          />
        </Link>
        <Link to="/individuals">Individuals</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/enterprise">Enterprise</Link>
      </div>
    </div>
  );
};

export default NavLink;
