import React from "react";
import { Btn } from "../../../ui/Btn";

export const CoursesCardItem = ({ img, title, price, delay }) => {
  return (
    <li data-aos="fade-up" data-aos-delay={delay}>
      <img src={img} alt={title} />
      <div className="courses__card-info">
        <h3>{title}</h3>
        <h4>{price} сом</h4>
        <Btn text="Подробнее" />
      </div>
    </li>
  );
};
