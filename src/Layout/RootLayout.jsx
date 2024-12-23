import React from "react";
import NavLink from "../components/NavLink";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div>
      <NavLink />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
