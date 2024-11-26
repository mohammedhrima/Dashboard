import React from "react";
import { useNavigate } from "react-router-dom";

function Navigator({ name, path, Icon }) {
  const navigate = useNavigate();
  const handleclique = (e) => {
    navigate(path);
  };
  return (
    <div className="navigate" onClick={handleclique}>
      <Icon />
      <h5>{name}</h5>
    </div>
  );
}

export default Navigator;
