import React from "react";

function Bar({ width }) {
  return (
    <>
      <h4>Positive reviews</h4>
      <div className="progress">
        <div className="bar" style={{ width }}></div>
      </div>
    </>
  );
}

function Reviews() {
  return (
    <div className="reviews">
      <div className="reviews-1">
        <h3>Reviews</h3>
      </div>
      <div className="reviews-2">
        <Bar width={"10%"} />
        <Bar width={"70%"} />
        <Bar width={"50%"} />
      </div>
      <div className="reviews-3">
        <div>
          More than <b>1,500,000</b> developers used Creative Tim's products and
          over <b>700,000</b> projects were created.
        </div>
        <div>
          <button>View all reviews</button>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
