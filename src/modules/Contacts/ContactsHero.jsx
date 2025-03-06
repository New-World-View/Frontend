import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Btn } from "../../ui/Btn";
import ContactsHeroImg from "../../assets/images/contactsHero.png";

export const ContactsHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="contacts__hero">
      <div className="container">
        <div className="contacts__hero-wrapper">
          <img 
            src={ContactsHeroImg} 
            alt="hero img" 
            data-aos="fade-left" 
          />
          <div 
            className="contacts__hero-wrapper-content" 
            data-aos="fade-right"
          >
            <h2>
              Наши курсы <br /> New World View
            </h2>
            <h3>
              By <span>N W V</span> | Feb 5, 2025
            </h3>
            <p>
              Наша компания была создана с целью помочь людям освоить
              современные IT-навыки и английский язык для успешного карьерного
              роста и комфортной жизни. Мы объединили команду профессионалов,
              которые искренне верят, что качественное образование открывает
              новые возможности.
              <br />
              <br />С момента основания мы стремимся делать обучение доступным,
              практическим и максимально эффективным.
            </p>
            <div data-aos="zoom-in">
              <Btn text="Подробнее" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
