import React from "react";

export const ReviewCard = ({ id, studantName, message }) => {
  return (
    <li key={id} className="review-card" data-aos="fade-up">
      <p>{message}</p>
      <hr />
      <h3 data-aos="fade-right">{studantName}</h3>
    </li>
  );
};
