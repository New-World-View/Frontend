import React from "react";
import { Link } from "react-router-dom";
import { Btn } from "../../../ui/Btn";

export const CoursesCardItem = ({ img, title, price, delay, id }) => {
  return (
    <li data-aos="fade-up" data-aos-delay={delay}>
      <img src={img} alt={title} />
      <div className="courses__card-info">
        <h3>{title}</h3>
        <h4>{price} сом</h4>
        <Link to={`/courses/info/${id}`}>
          <Btn text="Подробнее" />
        </Link>
      </div>
    </li>
  );
};
