import "./Navbar.css";
import React from "react";
import dark_logo from "assets/logo/dark.png";
import DashboardSvg from "../svgs/dashboardSvg";
import TablesSvg from "../svgs/tablesSvg";
import BillingSvg from "../svgs/billingSvg";
import SigninSvg from "../svgs/signIn";
import SignupSvg from "../svgs/signUp";
import ProfileSvg from "../svgs/profile";
import Navigator from "./utils/Navigator/Navigator";

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
