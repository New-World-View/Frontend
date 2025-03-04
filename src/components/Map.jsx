import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SectionTitle } from "../ui/SectionTitle";
import { Btn } from "../ui/Btn";

export const Map = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="map">
      <div className="container">
        <div data-aos="fade-down">
          <SectionTitle title="Наши адрес" />
        </div>
        <div className="map__wrapper">
          <iframe
            className="map__iframe"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac43f46c0626da3cdea1f72e56219db595cad424ac0be94a5261d1eaa991a9f7b&amp;source=constructor"
            frameBorder="0"
            data-aos="zoom-in"
          ></iframe>

          <div className="info" data-aos="fade-left">
            <h2>Свяжитесь с нами для бесплатной консультации</h2>
            <p>
              Приходите к нам! Удобное расположение, комфортная атмосфера и
              дружелюбный коллектив – ждем вас по адресу! <br />
              <br />
              Курманжан Датка 547 <br />
              Ориентир: напротив Business House Osh
            </p>
            <div data-aos="zoom-in">
              <Btn text="+996 505 00 44 11" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
