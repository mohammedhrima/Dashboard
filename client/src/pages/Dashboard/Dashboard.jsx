import React from "react";
import "./Dashboard.css";
import Reviews from "./utils/Reviews/Reviews";
import Cards from "./utils/Cards/Cards";
import Projects from "./utils/Projects/Projects";
import OrdersOverview from "./utils/OrdersOverview/OrdersOverview";

function Dashboard() {
  return (
    <div id="dashboard">
      <div className="dashboard-1">
        <div className="title">
          <h3>Dashboard</h3>
        </div>
      </div>
      <div className="dashboard-2">
        <Cards/>
        <Reviews />
      </div>
      <div className="dashboard-3">
        <Projects/>
        <OrdersOverview/>
      </div>
      <div className="dashboard-4"></div>
    </div>
  );
}

export default Dashboard;
