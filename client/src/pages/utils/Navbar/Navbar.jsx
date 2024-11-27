import "./Navbar.css";
import React from "react";
import dark_logo from "assets/logo/dark.png";
import DashboardSvg from "../svgs/DashboardSvg";
import TablesSvg from "../svgs/TablesSvg";
import BillingSvg from "../svgs/BillingSvg";
import SigninSvg from "../svgs/SignIn";
import SignupSvg from "../svgs/SignUp";
import ProfileSvg from "../svgs/Profile";
import Navigator from "./Navigator/Navigator";

function Navbar() {
  return (
    <div id="navbar">
      <div className="logo">
        <img src={dark_logo} alt="logo" />
        <h4>Soft UI Dashboard</h4>
      </div>
      <hr />
      <div className="paths">
        <Navigator name={"Dashboard"} path={"dashboard"} Icon={DashboardSvg} />
        <Navigator name={"Tables"} path={"tables"} Icon={TablesSvg} />
        <Navigator name={"Billing"} path={"billing"} Icon={BillingSvg} />
        <Navigator name={"Profile"} path={"profile"} Icon={ProfileSvg} />
        <Navigator name={"Sign In"} path={"signin"} Icon={SigninSvg} />
        <Navigator name={"Sign Up"} path={"signup"} Icon={SignupSvg} />
        {/* <Navigator name={"Virtual reality"} path={"virtual_reality"} Icon={DashboardSvg} /> */}
      </div>
    </div>
  );
}

export default Navbar;
