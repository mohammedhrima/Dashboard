import React from "react";
import "./Reviews.css"

function Bar({ text, perecentage }) {
  return (
    <div className="bar">
      <h4>{text} ({perecentage})</h4>
      <div className="progress">
        <div className="progress-bar" style={{ width: perecentage }}></div>
      </div>
    </div>
  );
}

function Reviews() {
  return (
    <div className="reviews">
      <div className="reviews-1">
        <h3>Reviews</h3>
      </div>
      <div className="reviews-2">
        <Bar perecentage={"10%"} text={"Positive Reviews"}/>
        <Bar perecentage={"70%"} text={"Neural Reviews"}/>
        <Bar perecentage={"50%"} text={"Negative Reviews"}/>
      </div>
      <div className="reviews-3">
        <div className="reviews-3-1">
          <p>
            More than <b>1,500,000</b> developers used Creative Tim's products and
            over <b>700,000</b> projects were created.
          </p>
        </div>
        <div className="reviews-3-2">
          <button>
            <h4>View all reviews</h4>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
