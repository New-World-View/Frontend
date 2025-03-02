import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderItem({ link, text }) {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <li onClick={scrollToTop} className="header_item" data-aos="fade-up">
      <NavLink to={link} className="item_text">
        {text}
      </NavLink>
    </li>
  );
}
