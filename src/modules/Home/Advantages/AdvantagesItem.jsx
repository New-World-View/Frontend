import React from "react";

export const AdvantagesItem = ({ icon, title, suptitle }) => {
  return (
    <li data-aos="fade-up">
      <div className="icon">
        <img src={icon} alt="icon" />
      </div>
      <h3>{title}</h3>
      <p>{suptitle}</p>
    </li>
  );
};
