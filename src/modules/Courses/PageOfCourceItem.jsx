import React from "react";
import Icon from "../../assets/icons/Check circle.svg"

export const PageOfCourceItem = ({ title, suptitle }) => {
  return (
    <li data-aos="fade-up">
      <div className="icon">
        <img src={Icon} alt="icon" />
      </div>
      <h3>{title}</h3>
      <p>{suptitle}</p>
    </li>
  );
};
