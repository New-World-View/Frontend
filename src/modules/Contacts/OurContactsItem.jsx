import React from "react";

export const OurContactsItem = ({ icon, title, suptitle, aosAnimation, aosDelay }) => {
  return (
    <li data-aos={aosAnimation} data-aos-delay={aosDelay}>
      <div className="icon">{icon}</div>
      <h2 className="title">{title}</h2>
      <h3 className="suptitle">{suptitle}</h3>
    </li>
  );
};
