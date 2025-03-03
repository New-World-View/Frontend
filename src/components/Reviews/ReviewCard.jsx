import React from "react";

export const ReviewCard = ({id, studantName, message}) => {
  return (
    <li key={id} className="review-card">
      <p>{message}</p>
      <hr />
      <h3>{studantName}</h3>
    </li>
  );
};
