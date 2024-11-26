import React from "react";
import "./Dashboard.css";
import Card from "./utils/Card/Card";
import FingerSvg from "../utils/svgs/finger";
import UserSvg from "../utils/svgs/userSvg";
import ShopingSvg from "../utils/svgs/shoping";
import LikeSvg from "../utils/svgs/like";
import Reviews from "./utils/Reviews/Reviews";

function Dashboard() {
  return (
    <div id="dashboard">
      <div className="dashboard-1">
        <div className="title">
          <h3>Dashboard</h3>
        </div>
      </div>
      <div className="dashboard-2">
        <div className="cards">
          <div className="left">
            <Card isSelected={false} Icon={UserSvg} />
            <Card isSelected={true} Icon={FingerSvg} />
          </div>
          <div className="right">
            <Card isSelected={false} Icon={ShopingSvg} />
            <Card isSelected={false} Icon={LikeSvg} />
          </div>
        </div>
        <Reviews />
      </div>
      <div className="dashboard-3"></div>
      <div className="dashboard-4"></div>
    </div>
  );
}

export default Dashboard;
