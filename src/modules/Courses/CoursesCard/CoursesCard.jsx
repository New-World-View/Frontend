import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CoursesCardItem } from "./CoursesCardItem";

export const CoursesCard = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="courses__card">
      <div className="container">
        <ul>
          {[...Array(6)].map((_, index) => (
            <CoursesCardItem
              key={index}
              img="https://sibadi.org/upload/iblock/153/web-min.jpg"
              title="English"
              price="3500"
              delay={index * 100}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
