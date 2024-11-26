import React from "react";

function Card({ isSelected , Icon}) {
  return (
    <div className={`card`}>
      <div className="up">
        <div className="icon">
          <div className="img"></div>
          {/* <Icon/> */}
        </div>
        <div></div>
      </div>
      <div className="down">
        <div className="left">
          <h3>1600</h3>
          <p>Users Active</p>
        </div>
        <div className="right">+55%</div>
      </div>
    </div>
  );
}

export default Card;
